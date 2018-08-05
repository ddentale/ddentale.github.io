
<!doctype html>
<html lang="it">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>My Company</title>
  </head>
  <body>
    <h1>Vue test</h1>
    <div id="app">{{ message }}</div>
    
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      })
    </script>
  </body>
</html>  
