<html ng-app="airline">  <!-- to use angular, add the ng-app directive to your markup. Then below ad the angular libraries -->
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>
<body>
	<table>
    	<!-- "ng-repeat" : in angular this is refered to as a directive. This directive allows us to cycle over an object or an array.  -->
        <tr ng-repeat="flight in flights | filter:search">	<!-- NOTE: each html element has it's own variable scope.  
                                                                            Theirfore the "flight" variable that is declared here, is only applicable to the "tr" element.
                                                                       this way you do not have to worry about javascript variables poluting the global scope. -->
            <td>{{flight.number}}</td>
            <td><a ng-href="#/airports/{{flight.origin}}">{{flight.origin + ' - ' + flight.originFullName}}</a></td>
            <td><a ng-href-"#/airports/{{flight.destination}}">{{flight.destination + ' - ' + flight.destinationFullName}}</a></td>
        </tr>
    </table>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min.js"></script>
	<script type="text/javascript" src="angular-resource.min.js"></script>
</body>
</html>