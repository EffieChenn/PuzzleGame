<?php

$DB_HOST = "localhost"; 
$DB_NAME = "puzzlegame"; 
$DB_USER = "root"; 
$DB_PASS = "root"; 

// 連接 MySQL 資料庫伺服器
$con = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS);
if (empty($con)) {
    print mysqli_error($con);
    die("資料庫連接失敗！");
    exit;
}

// 選取資料庫
if (!mysqli_select_db($con, $DB_NAME)) {
    die("選取資料庫失敗！");
} else {
    echo "<b>排行榜</b><br><br>";
}

// 設定連線編碼
mysqli_query($con, "SET NAMES 'UTF-8'");

// 取得資料
$sql = "SELECT * FROM rank ORDER BY convert(moves, decimal) ASC";
$result = mysqli_query($con, $sql);

// 獲得資料筆數
if ($result) {
    $num = mysqli_num_rows($result);
    echo "----目前有 " . $num . " 個玩家已登記----<br><br>";

}

// --- 顯示資料 --- //

echo "<table border='2' bordercolor='#cb997e'>";
    echo "<tr>";
            echo "<th>登記編號：</th>";
            echo "<th>名字：</th>";
            echo "<th>移動次數：</th>";
    echo "</tr>";
    $result = mysqli_query($con, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        
        echo "<tr>";
            echo "<td>" . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["moves"] . "</td>";
        echo "</tr>";
    }
echo "</table>";

// 釋放記憶體
mysqli_free_result($result);

// 關閉連線
mysqli_close($con);

?>
<head>
    <style type="text/css">
    body{
        background-color: blanchedalmond;
        margin: auto;
        text-align: center;
        color: #7f4f24;
    }
    table{
        margin-left:auto; 
        margin-right:auto;
        background-color: #eddcd2;
        color: #7f4f24;
    }
    b{
        font-size: 50px;
        color: #7f4f24;
    }
    button{
        padding: 10px;
        width: 150px;
        background-color: #cb997e;
    }

    </style>
    <title>排行榜</title>
</head>
<body>
    <br>
    <button onclick="restart()">RESTART</button><br><br>
    <button onclick="info()">查看名畫介紹</button>
    <script type="text/javascript">
        function restart(){
            document.location.href="index.html";
        }

        function info(){
            document.location.href="info.html";
        }
    </script>
</body>



           
