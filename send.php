<?php

function getPost($name)
{
    return $_POST[$name] ?? '';
}

function sendMessage($text)
{
    file_get_contents(
        "https://api.telegram.org/bot1470019683:AAG07gcgrAFmg_tRhxNb3QSCqChricg6tJw/sendMessage?chat_id=-738118946&parse_mode=html&text=$text"
    );
}

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
$telegram = $data['telegram'];
$description = $data['description'];
$projects = $data['projects'];


$text = <<<TEXT
==========
<b>Заявка STARTEAM</b>

<b>Имя</b>
$name

<b>Телефон</b>
$phone

<b>Email</b>
$email

<b>Telegram</b>
$telegram

<b>Кто вы?</b>
$description

<b>Проект или резюме</b>
$projects

==========
TEXT;

sendMessage(urlencode($text));

echo json_encode(['success' => true]);