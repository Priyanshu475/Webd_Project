<?php
	$uname = $_POST['uname'];
	$email = $_POST['email'];
	$pass = $_POST['pass'];

	// Database connection
	$conn = new mysqli('localhost','root','','reg');
	if($conn->connect_error){
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(UserName,Email,Password) values(?, ?, ?)");
		$stmt->bind_param("sss",$uname, $email, $pass);
		$stmt->execute();
        echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>