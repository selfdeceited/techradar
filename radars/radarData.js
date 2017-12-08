//This is the title for your window tab, and your Radar
document.title = "My own techlology radar (2018)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 700;
var w = 900;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            { "name":"Experiment increments", "pc":{"r":160,"t":130},"movement":"c"}, 
            { "name":"CQRS", "pc":{"r":170,"t":170},"movement":"c"}, 
            { "name":"Optimistic UI", "pc":{"r":260,"t":110},"movement":"c"}, 
            { "name":"GitHub public contibution", "pc":{"r":250,"t":140},"movement":"c"}, 
            { "name":"DOM security", "pc":{"r":270,"t":170},"movement":"c"}, 
            
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
                { name: 'Gremlins.js', pc: { r: 80, t: 80 }, movement: 'c' },
                { name: 'Orleans', pc: { r: 130, t: 20 }, movement: 'c' },
                { name: 'BDD in JS', pc: { r: 170, t: 45 }, movement: 'c' },
                { name: 'Swagger UI / CodeGen', pc: { r: 180, t: 75 }, movement: 'c' },
                { name: 'Unity', pc: { r: 220, t: 55 }, movement: 'c' },
                { name: 'Xamarin', pc: { r: 260, t: 25 }, movement: 'c' }
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            { name: 'Docker', pc: { r: 20, t: 220 }, movement: 'c' },
            { name: 'Chatbots (Slack / Telegram)', pc: { r: 85, t: 200 }, movement: 'c' },
            { name: 'Kubernetes', pc: { r: 180, t: 185 }, movement: 'c' },
            { name: 'Apache Kafka', pc: { r: 160, t: 225 }, movement: 'c' },
            { name: 'Socket updates (e.g. SignalR)', pc: { r: 170, t: 260 }, movement: 'c' }
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Bash', pc: { r: 50, t: 340 }, movement: 'c', domain: 'template' },
            { name: 'Python', pc: { r: 55, t: 300 }, movement: 'c', domain: 'template' },
            { name: 'GraphQL', pc: { r: 115, t: 320 }, movement: 'c', domain: 'template' },
            { name: 'Redux', pc: { r: 125, t: 280 }, movement: 'c', domain: 'template' },
            { name: 'Rx-*', pc: { r: 150, t: 330 }, movement: 'c',  domain: 'template' },          
            {"name":"Scala", "pc":{"r":130,"t":350}, "movement":"c"},
            {"name":"React Native", "pc":{"r":180,"t":275},"movement":"c"},   
            {"name":"Vim keybindings", "pc":{"r":245,"t":330},"movement":"c"},
            {"name":"Web Workers", "pc":{"r":260,"t":300},"movement":"c"},
        ]
    }
];
