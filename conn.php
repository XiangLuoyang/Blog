<?php
/**
 * Created by IntelliJ IDEA.
 * User: XiangLuoyang
 * Date: 16/6/27
 * Time: 下午4:36
 */
    $dsn="mysql:host=localhost;dbname=Blog";
    $db=new PDO($dsn,'root','');
    $db->query('set names utf-8');
?>
