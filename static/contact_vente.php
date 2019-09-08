<?php
# Get JSON as a string
$json_str = file_get_contents('php://input');

# Get as an object
$json_obj = json_decode($json_str);

$name = $json_obj->nom . $json_obj->prenom;
$loc = $json_obj->loc;
$type = $json_obj->type;
$surface = $json_obj->surface;
$nbPieces = $json_obj->nbPieces;
$surfaceTerr = $json_obj->surfaceTerr;
$garage = $json_obj->garage;
$tel = $json_obj->tel;
$message = $json_obj->message;
$isRenting = $json_obj->isRenting;
$alreadySelling = $json_obj->alreadySelling;
$dispo = "";

foreach($json_obj->dispo as $key => $day) {
  $dispo += $day . '\n';
}

// Create the email and send the message
$to = 'Contact@agenceviaduc.fr'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "[Contact Vente] Agenceviaduc.fr :  $name";

// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

$email_body = "Localisation : $loc\nType de bien : $type\nNombre de pièces : $nbPieces\nSurface du bien : $surface\nSurface du terrain : $surfaceTerr\nGarage : $garage\nLocation : $isRenting\nDéjà en vente : $alreadySelling\nTéléphone : $tel\nDisponibilités : $dispo\nInformations complémentaires : $message";

$headers = "From: noreply@agenceviaduc.fr\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
