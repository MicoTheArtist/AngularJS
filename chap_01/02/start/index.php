<html ng-app>
<head>
	<title>Demo</title>
</head>
<body>
	<h1>Welcome {{name}}!</h1>
    <form method="POST" action="index.php">
        <input placeholder="type your name..." ng-model="name" name="name" value="{{name}}">
        <input type="submit" name="go" value="go">
	</form>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    <script src="angular-resource.min.js"></script>
    
    <pre>
    	<? echo print_r($_POST); ?>
    </pre>
</body>
</html>