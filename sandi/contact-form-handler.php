<!?php
     $name = $_POST[name];
     $visitors_email =$_POST['email'];
     $message =$_POST['message'];


     $email_form = 'EasyTutorials@snsisekafalenI.com';
     $email_form = "New form Submission";

     $email_subject = "User Name: $name.\n"
                         "User Email: $visitor_email.\n"
                           "User Message: $message./n";



                       $to = "snisekafaleni@gmail.com";

                       $headers = "From: $email_from \r\n"

                       $headers = "Reply-To: $visitor_email \r\n";

                       mail(to,$email_subject,$email_body,$headers)
        
                       header("location: index.html");                       

  ?>