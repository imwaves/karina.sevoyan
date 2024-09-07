<?php
if (isset($_POST["email"])) {
  // $to = "imwaves@gmail.com";
  $to = "karina.sevoyan@gmail.com";
  $subj = "Buy offer on karinasevoyan.com";
  $token = "mlsn.4164bab20e5e2a90ba15fceab5b48be7fdf5976aa19a0d0cfd481e0ff7e54ed1";

  $email = $_POST["email"];
  $pic = $_POST["pic"];
  $text = $_POST["text"];

  // mock
  // $email = 'karina.sevoyan@gmail.com';
  // $pic = '1st one';
  // $text = 'hello!';

  $ch = curl_init();
  $url = "https://api.mailersend.com/v1/email";
  $json = '{
    "from": {
        "email": "karina.buy@trial-pxkjn41rz95gz781.mlsender.net"
    },
    "to": [
        {
            "email": "'.$to.'"
        }
    ],
    "subject": "'.$subj.'",
    "text": "From: '.$email.'\nPic: '.$pic.'\nText: '.$text.'"
  }';
  $json = json_decode($json);
  // var_dump($json);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($json));
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'X-Requested-With: XMLHttpRequest',
    'Authorization: Bearer ' . $token
  ));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  if ($response === false) {
      echo 'cURL Error: ' . curl_error($ch);
  } else {
      echo $response;
  }
  curl_close($ch);
}

exit(0);

// if (isset($_POST["email"])) {
//   $email = $_POST["email"];
//   $pic = $_POST["pic"];
//   $text = $_POST["text"];
//   $headers = "From: buy@karinasevoyan.com";

//   $res = mail(
//     "imwaves@gmail.com",
//     "Buy on karinasevoyan.com",
//     "From: ".$email."\nAbout: ".$pic."\nText: ".$text,
//     $headers
//   );
//   if ($res) {
//     echo("OK - ".$res);
//   } else {
//     echo(error_get_last()['message']);
//   }
// }
?>