<?php
$url = 'https://api.usdt.com/uc/member/personal/detail';
$options = [
    'http' => [
        'method' => 'OPTIONS',
        'header' => "Host: api.usdt.com\r\n".
                    "Connection: keep-alive\r\n".
                    "Accept: */*\r\n".
                    "Access-Control-Request-Method: POST\r\n".
                    "Access-Control-Request-Headers: agents,deviceid,platform-logo,platformlogo,terminal,x-auth-token\r\n".
                    "Origin: https://m.uugame.org\r\n".
                    "User-Agent: Mozilla/5.0 (Linux; Android 12; M2007J20CG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36\r\n".
                    "Sec-Fetch-Mode: cors\r\n".
                    "Sec-Fetch-Site: cross-site\r\n".
                    "Sec-Fetch-Dest: empty\r\n".
                    "Referer: https://m.uugame.org/\r\n".
                    "Accept-Encoding: gzip, deflate, br\r\n".
                    "Accept-Language: id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5,ms;q=0.4\r\n"
    ]
];

$context = stream_context_create($options);
$headers = get_headers($url, false, $context);

print_r($headers);
