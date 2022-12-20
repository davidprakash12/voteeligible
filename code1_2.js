Code 1:Input age and print message in body sectionCode 2: Input age in body section and print the message through function

<html lang="en">
<head>
    <script>
        function validate(age){
            var ans="not eigible";
            if(age>=18){
                ans="eligible";
            }
            return(ans);
        }
    </script>
</head>
<body>
    <script>
        var age=parseInt(prompt("Enter age"));
        var status=validate(age);
        document.write("You are <b>"+status+"</b> for Vote");
    </script>
</body>
</html>
code :2
<head>
    <script>
        function validate(age){
            var ans="not eigible";
            if(age>=18){
                ans="eligible";
            }
            document.write("You are <b>"+ans+"</b> for Vote");
        }
    </script>
</head>
<body>
    <script>
        var age=parseInt(prompt("Enter age"));
        validate(age);
    </script>
</body>
</html>
