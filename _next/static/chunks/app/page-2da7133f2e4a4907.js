(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2143:(e,t,s)=>{Promise.resolve().then(s.bind(s,3792))},3792:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(5155),n=s(2115);function l(){let[e,t]=(0,n.useState)(""),[s,l]=(0,n.useState)([]),[r,o]=(0,n.useState)(""),[i,c]=(0,n.useState)(""),[h,d]=(0,n.useState)(""),[u,x]=(0,n.useState)(!1),m=(e,t)=>{l(s.map(s=>s.id===e?{...s,text:t}:s))},f=e=>{l(s.filter(t=>t.id!==e))},p=async()=>{if(0===s.length||""===r.trim()){alert("Please enter tasks and a timeframe.");return}x(!0);var t,a="";a="leslie"===e.toLowerCase()?"ALWAYS USE <b> IF YOU NEED TO BOLD YOUR RESPONSES!!! DO NOT USE DOUBLE ASTERICKS\nHey! You're talking to my friend ".concat(e,", who's been bedrotting and has ").concat(r," to get back on track! Here's what ").concat(e," has to get done':\n")+s.map((e,t)=>"".concat(t+1,". ").concat(e.text)).join("\n")+"\n\nShe REALLY likes Hatsune Miku, so pretending you're Hatsune Miku and including Hatsune Miku references, give them a structured, realistic schedule based on the current time and amount of time they have to work in this schedule format:\n[Introduction message (make sure you introduce yourself as Hatsune Miku)]\n[00:00-##:##: <b>Task</b>, bit of encouragement and tips on how to complete the task well] and repeat this structure. Here's an example: <b>[Greeting]</b>\n\nHere's your customized schedule: \n\n<b>00:00-00:30: Finish Math Homework,</b> Leslie-chan! Take a deep breath and dive into your math problems. Focus on one question at a time, and make sure you understand each concept before moving on to the next. You got this!\n\n<b>00:30-01:15: Watch Algorithms Class Lecture.</b> Take a short break to grab a snack or stretch, and then settle in to watch your lecture. Take notes on important points, and don't hesitate to pause the video if you need to review something.\n\n<b>01:15-03:00: Study for Linear Algebra Test.</b> You're almost there, Leslie-chan! Review your notes and textbook, and try to summarize key concepts in your own words. Make flashcards or create a concept map to help you visualize the material.\n\n[Closing message with Hatsune Miku references]":"ALWAYS USE <b> IF YOU NEED TO BOLD YOUR RESPONSES!!! DO NOT USE DOUBLE ASTERICKS. Hey! You're talking to my friend ".concat(e,", who's been bedrotting and has ").concat(r," to get back on track! Here's what ").concat(e," has to get done':\n")+s.map((e,t)=>"".concat(t+1,". ").concat(e.text)).join("\n")+"\n\nIn a fun, chill tone, give them a structured, realistic schedule based on the current time and amount of time they have to work in this schedule format:\n[Introduction message]\n<b>00:00-##:##: Task</b>, bit of encouragement and tips on how to complete the task well. Repeat this structure. Here's an example: <b>[Greeting]</b>\n\nHere's your customized schedule:\n\n<b>00:00-00:20: History Studying,</b> Let's get that history test prep started! Focus on reviewing your notes, making flashcards, and going over any tricky dates or events. You got this, Bob!\n\n<b>00:20-00:45: English Essay Brainstorm,</b> Time to get those creative juices flowing! Take 10-15 minutes to brainstorm ideas for your essay, then organize your thoughts into an outline. Remember, a solid outline will make the writing process so much smoother!\n\n<b>00:45-01:10: Math Homework</b>, Math homework can be a real challenge, but you're almost there! Focus on one problem at a time, and don't be afraid to take breaks if you get stuck. You've got this, Bob! You're so close to finishing!\n\n<b>01:10-02:00: Write That Essay,</b> It's time to put your thoughts into words! Take your outline and start writing that essay. Remember to stay focused, and don't worry too much about grammar or spelling at this stage. Just get your ideas down on paper!\n\n[Closing message]";try{let e=await fetch("/api/generate-schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a})}),t=await e.json();d(t.schedule)}catch(e){console.error("Error fetching schedule:",e),d("Failed to generate schedule. Try again.")}finally{x(!1)}null===(t=document.getElementById("next-section"))||void 0===t||t.scrollIntoView({behavior:"smooth"})};return(0,a.jsxs)("div",{className:"h-screen snap-y snap-mandatory ".concat(""===e.trim()?"overflow-hidden":"overflow-y-scroll"),children:[(0,a.jsxs)("section",{id:"sec1",className:"h-screen flex justify-center items-center snap-start relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-[20px] left-[20px] right-[20px] bottom-[20px] z-0",children:(0,a.jsxs)("svg",{viewBox:"0 0 1382 961",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",preserveAspectRatio:"none",children:[(0,a.jsx)("path",{d:"M0 35C0 15.6701 15.67 0 35 0H1347C1366.33 0 1382 15.67 1382 35V875H0V35Z",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"86.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"259.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"432.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"605.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"778.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"951.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"1124.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"}),(0,a.jsx)("circle",{cx:"1295.5",cy:"874.5",r:"86.5",fill:"#FFE1A8"})]})}),(0,a.jsx)("main",{className:"z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start",children:(0,a.jsx)("div",{id:"s1",children:(0,a.jsxs)("h1",{children:["hello, ",(0,a.jsx)("input",{type:"text",id:"helloText",value:e,onChange:s=>{t(s.target.value),console.log(e)}})]})})})]}),""!==e.trim()&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{className:"h-screen flex flex-col items-center snap-start",children:(0,a.jsxs)("div",{id:"sec2",className:"w-full h-full flex flex-col justify-start items-center pt-0",children:["leslie"===e.toLowerCase()?(0,a.jsxs)("svg",{width:"724",height:"509",viewBox:"0 0 724 509",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M495 354.5C491.4 354.5 469.167 355.833 458.5 356.5L460 359L528.5 363L525.5 359C516.833 357.5 498.6 354.5 495 354.5Z",fill:"#88D0C7"}),(0,a.jsx)("path",{d:"M558 413L503.5 434.5L547 451L586 425L558 413Z",fill:"#8A8585"}),(0,a.jsx)("circle",{cx:"545.624",cy:"378",r:"25",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M336.624 363C375.024 348.6 487.291 357 538.624 363L542.624 397C534.624 399.667 512.224 405.4 486.624 407C461.024 408.6 347.957 445 294.624 463C271.124 474.333 212.524 497 166.124 497C108.124 497 48.1241 453 50.1241 463C51.7241 471 30.7908 497 20.1241 509C12.7908 504.333 -1.4759 491.8 0.124102 479C1.7241 466.2 26.1241 437.667 38.1241 425L156.124 449C144.791 428.333 128.924 382.2 156.124 363C190.124 339 288.624 381 336.624 363Z",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M455.601 453.39C444.301 452.836 398.096 425.701 378.624 407L412.829 390.125C421.464 391.114 453.014 384.686 455.601 396.594C458.836 411.478 493.917 434.314 524.131 436.079C554.345 437.844 558.339 448.801 544.659 456.342C530.98 463.883 469.726 454.083 455.601 453.39Z",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M529 359C505.167 359.167 455.8 360.1 449 362.5C440.5 365.5 408.5 380.5 403 386.5C397.5 392.5 387.5 398 385.5 406C383.9 412.4 384.833 415.333 385.5 416C381.167 412.5 372.8 404.1 374 398.5C375.423 391.858 379.997 387.017 382.597 386.539C380.62 386.631 375.704 386.944 375 388C374.2 389.2 373.333 390.833 373 391.5C373.167 386.667 374.9 376.1 380.5 372.5C387.5 368 403.5 358.5 417 357C430.5 355.5 463 353 473.5 353C484 353 521.5 357 524 357C526 357 528.167 358.333 529 359Z",fill:"#88D0C7"}),(0,a.jsx)("path",{d:"M550 371.5C553.2 374.3 558.667 374.667 561 374.5L554 369.5L541 362H550C548 361 543 359 539 359C535 359 529.167 360.5 526.5 361.5C525.667 360.5 523.5 359 525.5 359C528 359 534.5 352.5 541 351.5C547.5 350.5 557 353 561 355C564.2 356.6 567.167 361 567.5 364C568.333 364.5 569 368.3 571 371.5C573.5 375.5 567 396 566 397C565 398 547.5 406.5 544 406.5C540.5 406.5 436.5 434 411 446C385.5 458 297 481.5 291.5 481C287.1 480.6 276.333 476.5 271.5 474.5C275.667 475.5 284.7 476.7 287.5 473.5C290.3 470.3 305.667 466.167 313 464.5H301C295 464.5 287.167 470.5 284 473.5C285.5 471 289.1 465.7 291.5 464.5C293.9 463.3 303.833 457.667 308.5 455C312 454.833 320.8 453.6 328 450C337 445.5 433 410.5 454.5 406.5C471.7 403.3 512.333 398.833 530.5 397C535 398.5 545.2 401.5 550 401.5C553.076 401.5 557.203 399.266 560.091 397.493C558.356 397.618 556.601 396.675 554 397C550.8 397.4 544 391.167 541 388H550C554.8 388 559.333 385.667 561 384.5C558.167 383.333 552 380.6 550 379C548 377.4 545.167 368.333 544 364C544.667 365.333 546.8 368.7 550 371.5Z",fill:"#88D0C7"}),(0,a.jsx)("path",{d:"M724 -9L586 425L558 413L507.5 433L3 -9H724Z",fill:"#F8F2EC","fill-opacity":"0.5"}),(0,a.jsx)("path",{d:"M531.5 350L529 360.5L526 362L527.5 348L531.5 350Z",fill:"#9C4066"}),(0,a.jsx)("path",{d:"M543 411.5L530 397.5V397L525.5 397.5L535 408.5L531 409.5L534 411.5H543Z",fill:"#9C4066"})]}):(0,a.jsxs)("svg",{width:"724",height:"509",viewBox:"0 0 724 509",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M558 413L503.5 434.5L547 451L586 425L558 413Z",fill:"#8A8585"}),(0,a.jsx)("circle",{cx:"545.624",cy:"378",r:"25",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M336.624 363C375.024 348.6 487.291 357 538.624 363L542.624 397C534.624 399.667 512.224 405.4 486.624 407C461.024 408.6 347.957 445 294.624 463C271.124 474.333 212.524 497 166.124 497C108.124 497 48.1241 453 50.1241 463C51.7241 471 30.7908 497 20.1241 509C12.7908 504.333 -1.4759 491.8 0.124102 479C1.7241 466.2 26.1241 437.667 38.1241 425L156.124 449C144.791 428.333 128.924 382.2 156.124 363C190.124 339 288.624 381 336.624 363Z",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M455.601 453.39C444.301 452.836 398.096 425.701 378.624 407L412.829 390.125C421.464 391.114 453.014 384.686 455.601 396.594C458.836 411.478 493.917 434.314 524.131 436.079C554.345 437.844 558.339 448.801 544.659 456.342C530.98 463.883 469.726 454.083 455.601 453.39Z",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M724 -9L586 425L558 413L507.5 433L3 -9H724Z",fill:"#F8F2EC",fillOpacity:"0.5"})]}),(0,a.jsx)("h1",{className:"text-3xl mt-4",children:"so you've been rotting..."})]})}),(0,a.jsxs)("section",{className:"h-screen flex flex-col items-center justify-center snap-start relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-[20px] left-[20px] right-[20px] bottom-[0px] z-0",children:(0,a.jsxs)("svg",{viewBox:"0 0 1382 997",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",preserveAspectRatio:"none",children:[(0,a.jsx)("rect",{x:"1382",y:"997",width:"1382",height:"907.778",transform:"rotate(-180 1382 997)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"1295.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 1295.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"1122.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 1122.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"949.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 949.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"776.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 776.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"603.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 603.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"430.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 430.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"257.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 257.5 89.7403)",fill:"#FFE1A8"}),(0,a.jsx)("ellipse",{cx:"86.5",cy:"89.7403",rx:"86.5",ry:"89.7404",transform:"rotate(-180 86.5 89.7403)",fill:"#FFE1A8"})]})}),(0,a.jsxs)("div",{id:"form",className:"z-10",children:[(0,a.jsxs)("h1",{className:"text-3xl",children:["let's get back on track, ",e]}),(0,a.jsx)("input",{className:"border p-2 w-80 mt-2 rounded-[20px]",placeholder:"Timeframe (e.g., 2 hours)",value:r,onChange:e=>o(e.target.value)}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h2",{className:"text-lg font-bold",children:"Enter your tasks"}),(0,a.jsx)("ul",{className:"mt-3 space-y-2",children:s.map(e=>(0,a.jsxs)("li",{className:"flex items-center space-x-2",children:[(0,a.jsx)("input",{id:"taskInput",type:"text",value:e.text,onChange:t=>m(e.id,t.target.value),className:"border-b focus:outline-none bg-transparent w-full"}),(0,a.jsx)("button",{onClick:()=>f(e.id),className:"text-lg",children:"✕"})]},e.id))})]}),(0,a.jsx)("input",{className:"border p-2 w-80 mt-2 rounded-[20px]",placeholder:"Add a task and hit enter",value:i,onChange:e=>c(e.target.value),onKeyDown:e=>{"Enter"===e.key&&""!==i.trim()&&(l([...s,{id:Date.now(),text:i}]),c(""))}}),(0,a.jsx)("button",{id:"doneButton",onClick:p,className:"mt-4 p-2",children:u?"Generating...":"That's It"})]})]}),h&&(0,a.jsxs)("section",{id:"next-section",className:"h-screen flex justify-center items-center snap-start relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 left-[20px] right-[20px] bottom-0 z-0",children:(0,a.jsxs)("svg",{viewBox:"0 0 1382 1004",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",preserveAspectRatio:"none",children:[(0,a.jsx)("rect",{width:"1382",height:"788",fill:"#FFE1A8"}),(0,a.jsx)("path",{d:"M1382 782C1382 1213.89 1154.63 882.5 773 882.5C391.371 882.5 0 1213.89 0 782C0 350.113 309.371 0 691 0C1072.63 0 1382 350.113 1382 782Z",fill:"#303036"})]})}),(0,a.jsxs)("div",{id:"schedule",className:"text-center max-w-xl z-10",children:[(0,a.jsx)("h1",{className:"text-3xl mb-4",children:"your schedule"}),u?(0,a.jsx)("p",{className:"text-lg",children:"Generating your schedule..."}):(0,a.jsx)("p",{className:"whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:h||"Your schedule will appear here."}})]}),(0,a.jsx)("p",{className:"fixed bottom-2 w-full text-center text-sm text-gray-400 z-50",children:"dev by olivia"})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(2143)),_N_E=e.O()}]);