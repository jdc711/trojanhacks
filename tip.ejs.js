<!doctype html>

<html>
  <head>
    <title>commentboard</title>

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

      <link rel="stylesheet" type="text/css" href="/stylesheet.css" />
    </head>

  <body>
    <div class="container">
      <h1>
        <a href="/">commentboard</a>
      </h1>

      <hr/>

      <div class="tips">
        <div class="tip">
          <p class="content">
            <b><%= tip.author %><br/></b>
          </p>

          <p class="details">
            
               <%= tip.content %>
            <br/>

            <a href="/tip/"
              <%= tip._id %>" class="permalink">
              <%= moment(tip.created).format('MMMM DD, hh:mm a') %>
            </a>
          </p>
        </div>

      </div>
    </div>
  </body>
</html>