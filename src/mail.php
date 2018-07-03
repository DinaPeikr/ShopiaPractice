<?php

$recepient = "divo1peikr@gmail.com";
$sitename = "LandingPractice";

$email = trim($_POST["subscribeEmail"]);

$message = "
New registration on the site:
Email: $email";

$pagetitle = "New subscribe from \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");
