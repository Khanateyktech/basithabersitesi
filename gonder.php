<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $mesaj = $_POST["mesaj"];

    $to = "basithabersitesi@mail.com"; // E-postanın gönderileceği adresi buraya girin
    $subject = "İletişim Formu Mesajı";
    $message = "E-posta: $email\n\nMesaj:\n$mesaj";
    $headers = "From: okuyucu@mail.com"; // E-postanın gönderen adresini buraya girin

    if (mail($to, $subject, $message, $headers)) {
        echo "Mesajınız gönderildi, teşekkür ederiz!";
    } else {
        echo "Mesaj gönderilirken bir hata oluştu.";
    }
}
?>
