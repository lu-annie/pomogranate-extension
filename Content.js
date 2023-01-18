const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background-image: url("https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9tZWdyYW5hdGV8ZW58MHx8MHx8&w=1000&q=80");
      color: #fff;
      font-family: "Open Sans", sans-serif;
      overflow: hidden;
      background-repeat: repeat;
      background-size: 100px;
    }

    ._1 {
      text-align: center;
      margin: 0;
      font-size:4em;
      font-weight: bold;
      text-shadow: 2px 2px #FF0000;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%) }
      display: block;
    }
    
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
        <div class='_1'>You've been stopped by the Pomogranate.
        </br>
        Get back to work now!</div>
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.roblox.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("ROBLOX");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
    case "www.amazon.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
  }