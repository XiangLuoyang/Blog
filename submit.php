<?
    $title=$_POST["title"]; $author=$_POST["author"];
    $sex=$_POST["sex"]; $content=$_POST["content"];
    $email=$_POST["email"]; $date=date("Y-m-d H:i:s");
    require('conn.php');
    $sql="insert into lyb(title,author,content,sex,date) values(?,?,?,?,?)";
    $stmt=$db->prepare($sql);
    $stmt->bindParam(1,$title);
    $stmt->bindParam(2,$author); $stmt->bindParam(3,$content);
    $stmt->bindParam(4,$sex); $stmt->bindParam(5,$date);
    $stmt->execute();
    header("Location:message.php");
?>
