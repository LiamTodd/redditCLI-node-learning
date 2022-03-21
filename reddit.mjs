#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'


const {argv} = yargs(process.argv)

const res = await fetch("https://reddit.com/.json")
const data = await res.json()

// get random post
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`


// do things based on input
if(argv.print){
    // print flag passed
    console.log(`
    title: ${randomPost.data.title}
    link: ${link}
    `
    )
}
else{
    // no flag passed
    open(link)
}

