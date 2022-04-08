<?php
	$email = $_POST['email'];
	$pass = $_POST['pass'];

	// Database connection
	$conn = new mysqli('localhost','root','','reg');
	if($conn->connect_error){
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("select * from registration where Email = ?");
		$stmt->bind_param("s",$email);
		$stmt->execute();
		$stmt_result = $stmt->get_result();
		if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['Password'] === $pass){
                echo"<h2>Login Sucessfully</h2>";
            }
            else{
                echo"<h2>Invalid Password/Username</h2>";
            }
        }else{
            echo"<h2>Invalid Password/Username</h2>";
        }
	}
?>