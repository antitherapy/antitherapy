<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "williamjacobdean@gmail.com"; // Replace with your email address
    $subject = "Antitherapy form submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);
}
?>
