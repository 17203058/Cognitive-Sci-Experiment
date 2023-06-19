// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "simon-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Simon task",
    "description": "",
    "repository": "",
    "contributors": "Michael Kriechbaumer\nFelix Henninger"
  },
  "parameters": {},
  "files": {},
  "messageHandlers": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "responses": {
        "click button": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EMusic and Memory\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp\u003EIn the following experiment, you're going to see multiple videos. Each one will display multiple icons arranged in a grid view. Your task is to memorise the position of each icon. Background music will be played and you will have a minute to memorise the pattern. You will not be able to pause the video. After that, you will be asked the location of 3 of the icons. Before continuing, please make sure that:\n    \u003C\u002Fp\u003E\n    \u003Ccenter\u003E\n      \u003Cul \u003E\n\t\t    \u003Cli\u003EYou are in a quiet and distraction-free area\u003C\u002Fli\u003E\n\t\t    \u003Cli\u003EYou are wearing headphones\u002Fearphones\u002Fairpods \u003C\u002Fli\u003E\n\t    \u003C\u002Ful\u003E\n     \u003C\u002Fcenter\u003E\n    \u003Cp\u003EBelow is an example of the icons that will be shown and the questions that will be asked.\u003C\u002Fp\u003E\n    \u003Cimg src=\"${ this.files['pic.png'] }\" width = \"400\"\u002F\u003E\n    \n    \u003Cp\u003EWhat is the location of the \n    \u003Ckbd\u003E\u003Cimg src=\"${ this.files['football.png'] }\" width = \"30\"\u002F\u003E\u003C\u002Fkbd\u003E icon?\n    \u003C\u002Fp\u003E\n\n    \u003Cp\u003EAnswer: 3,3 \u003C\u002Fp\u003E\n    \u003Chr\u003E\n    \n    \u003Cp\u003EPlease click on the button below to start the task\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "notes": "Instruction",
      "parameters": {},
      "files": {
        "simon_green.svg": "embedded\u002F9fa89c4e3dba7098b2ca91aed62d20c707369b93b3dd7af96a56e85b071a7634.svg",
        "simon_blue.svg": "embedded\u002Fe031f99402d1ebdfb1276e246c3aa118869b0fd1cf9c66924d52ed1faf493567.svg",
        "pic.png": "embedded\u002F675636002adb9fc3458bb81451d2a7b248b397ec4cbf4275a3e105a642a1ffac.png",
        "football.png": "embedded\u002F9ea08638f4352e683e6dce856370d06306b567f9d048d7367aef89df1dfc9962.png"
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EVideo 1 (no music)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n    \u003Ciframe class=\"ytplayer\" width=\"420\" height=\"315\" \r\n      src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FQHF_QiWVBcM?autoplay=1\"allow=\"autoplay\"\u003E\r\n      \u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Video 1",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EForm 1 (no music)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n      \u003Ciframe src=\"https:\u002F\u002Fdocs.google.com\u002Fforms\u002Fd\u002Fe\u002F1FAIpQLSfnt_tRSCpc3WW0AQLLpqQnZ4K7J4IEp9DqT2c6Vm1KSnVx_A\u002Fviewform?embedded=true\" width=\"640\" height=\"374\" frameborder=\"0\" marginheight=\"0\" \u003E\u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form 1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EVideo 2 (Lofi)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n    \u003Ciframe class=\"ytplayer\" width=\"420\" height=\"315\" \r\n      src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FXSLwMcnHQYU?autoplay=1\"allow=\"autoplay\"\u003E\r\n      \u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Video 2",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EForm 2 (Lofi)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n      \u003Ciframe src=\"https:\u002F\u002Fdocs.google.com\u002Fforms\u002Fd\u002Fe\u002F1FAIpQLSdRrKEOCYT6MIYZtU0oeqJY5S1K7s0bVmUkATu9ijBvxEhlZQ\u002Fviewform?embedded=true\" width=\"640\" height=\"374\" frameborder=\"0\" marginheight=\"0\" \u003E\u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form 2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EVideo 3 (Instrumental)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n    \u003Ciframe class=\"ytplayer\" width=\"420\" height=\"315\" \r\n      src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FhgzY9EoRsyo?autoplay=1\"allow=\"autoplay\"\u003E\r\n      \u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Video 3",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EForm 3 (Instrumental)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n      \u003Ciframe src=\"https:\u002F\u002Fdocs.google.com\u002Fforms\u002Fd\u002Fe\u002F1FAIpQLSedtUOrvcbtmdU0Sh8n4XYl5sjybPf4uft9FVA_LWUCSVjHMw\u002Fviewform?embedded=true\" width=\"640\" height=\"374\" frameborder=\"0\" marginheight=\"0\" \u003E\u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form 3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EVideo 4 (Nightcore)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n    \u003Ciframe class=\"ytplayer\" width=\"420\" height=\"315\" \r\n      src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FfoWnBO34Nww?autoplay=1\"allow=\"autoplay\"\u003E\r\n      \u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Video 4",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EForm 4 (Nightcore)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n      \u003Ciframe src=\"https:\u002F\u002Fdocs.google.com\u002Fforms\u002Fd\u002Fe\u002F1FAIpQLScntFWGGDzl7fbOJGfSRYJwf5Vl4I7Ixie7eIkKnUboPZjsjA\u002Fviewform?embedded=true\" width=\"640\" height=\"374\" frameborder=\"0\" marginheight=\"0\" \u003E\u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form 4"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EVideo 5 (Pop)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n    \u003Ciframe class=\"ytplayer\" width=\"420\" height=\"315\" \r\n      src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002Fau4Ut2vxLtQ?autoplay=1\"allow=\"autoplay\"\u003E\r\n      \u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Video 5",
      "timeout": "60000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Chtml\u003E\r\n\u003Cheader\u003E\r\n  \u003Ch1\u003EForm 5 (Pop)\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n  \u003Cbody\u003E\r\n    \u003Ccenter\u003E\r\n      \u003Ciframe src=\"https:\u002F\u002Fdocs.google.com\u002Fforms\u002Fd\u002Fe\u002F1FAIpQLSdCA1CAxU2wImNUU2Dg9Y3bsT58Q7xm-qIu7twhvsYugI8zLA\u002Fviewform?embedded=true\" width=\"640\" height=\"374\" frameborder=\"0\" marginheight=\"0\" \u003E\u003C\u002Fiframe\u003E\r\n    \u003C\u002Fcenter\u003E\r\n  \u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form 5"
    },
    {
      "type": "lab.html.Screen",
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Thanks",
      "notes": "Finishing the experiment and offering download of data (to be included)",
      "content": "\u003Cheader\u003E\r\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"m-w text-center\"\u003E\r\n    \u003Cp\u003E\u003Cstrong\u003EThe experiment is now complete.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n    \u003Cp\u003EThank you for taking the time!\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n  \u003Cp\u003EYou can now close this window.\u003C\u002Fp\u003E\r\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "files": {}
    }
  ]
})

// Let's go!
study.run()