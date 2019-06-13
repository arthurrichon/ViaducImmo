<?php
# Get JSON as a string
$json_str = file_get_contents('php://input');

# Get as an object
$json_obj = json_decode($json_str);

$name = $json_obj->nom . $json_obj->prenom;
$email = $json_obj->email;
$message = $json_obj->message;

// Create the email and send the message
$to = 'Contact@agenceviaduc.fr'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "[Contact] Agenceviaduc.fr :  $name";

// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

$email_body = "Nom : $name\nEmail : $email\nInformations complémentaires : $message";

$headers = "From: noreply@agenceviaduc.fr\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
