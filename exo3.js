<?php
echo date("H:i:s");
?>

  
<!DOCTYPE html>
<html>
<head>
    <title>Heure Actuelle</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function(){
            function updateTime(){
                $.ajax({
                    url: "time.php",
                    success: function(result){
                        $("#time").html(result);
                    }
                });
            }
            setInterval(updateTime, 1000);
        });
    </script>
</head>
<body>
    <h1>Heure Actuelle</h1>
    <div id="time"></div>
</body>
</html>
