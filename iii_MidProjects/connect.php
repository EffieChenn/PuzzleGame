<?php
	$name = $_POST['name'];
	$moves = $_POST['moves'];

	//database connection
	$conn = new mysqli('localhost', 'root', 'root', 'puzzlegame');
	if($conn -> connect_error){
		die('connection Failed : ' .$conn -> connect_error);
	}else{
		$stmt = $conn -> prepare("insert into rank(name, moves) values(?, ?)");
		$stmt->bind_param("ss", $name, $moves);
		$stmt->execute();
		echo "登記成功...跳轉中...";		
		$stmt->close();
		$conn->close();
		header('Refresh:2;url=ranking.php');		//跳轉到排名頁面
	}
?>