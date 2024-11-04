<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h4>Hello Admin</h4>
    <p>You have new Enquiry</p>

    <p>Full Name : {{ $request['full_name'] }} </p>
    <p>Email : {{ $request['email'] }} </p>
    <p>Phone Number : {{ $request['phone_number'] }} </p>
    <p>USDOT : {{ $request['USDOT'] }} </p>
    <p>MC : {{ $request['MC'] }} </p>
    <p>Number Track : {{ $request['number_track'] }} </p>
    <p>Type Track : {{ $request['type_track'] }} </p>
</body>

</html>
