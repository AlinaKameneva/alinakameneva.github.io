const interview = () => {
    const video_cv = "<video width=100% height=100% controls><source src=\"video/video_cv.webm\" type=\"video/webm\"></video>";
    document.getElementById("view").innerHTML = video_cv; 
}

const biography = () => {
   
    const biography = "<h1>Me short biography:</h1><h2>Alina Kameneva.</h2>" + 
        "<p>Alina Kameneva grew up in a small town in the Volgograd region. " + 
        "In 2015 she have completed secondary specialized education. Alina has a first-class degree in «Programming in computer systems». " + 
        "In the same year she moved to St. Petersburg and entered the ITMO University. " + 
        "Alina also works in the center of printing services in 24-hour shifts. " + 
        "She spends her free time at the computer, studying programming languages and operating systems becouse she wants to find a new job.</p>";
    document.getElementById("view").innerHTML = biography;
}

const cover_letter = () => {
    
    const cover_letter = "<h2>Kameneva Alina<br>Phone: 249-74-43<br>px-mew@mail.ru</h2>" +
        "<h3>Christine Smith<br>IT Company<br>123 Main Street<br>Anytown, 55555<br></h3>" +
        "<h3>Dear Ms Smith</h3>" + 
        "<p>I am writing to you regarding the vacancy \"Software testing\". The described responsibilities " +
        "of this position seem to me interesting. " +
        "I was always attracted by the quality control of products. This is an opportunity to make the world better. " +
        "I want to note immediately that I do not have experience with testing, but unlike most candidates, I have the following strengths:<br><br>" +
        " - Secondary special education in the field of programming;<br>" + 
        " - Higher technical education in ITMO university.<br><br>" + 
        "My professional experience also includes:<br><br>" + 
        " - work with databases (SQL);<br> - knowledge of  languages Python, HTML and others;<br> - development of test scenaries.<br><br>" + 
        "In the case of mutual interest, I propose to call at any time convenient for you.<br><br>Best regards" + "</p>" +
        "<h3>Alina Kameneva</h3>";

    document.getElementById("view").innerHTML = cover_letter;

}

const cv = () => {
    const cv = "<h1>Kameneva Alina</h1>" +
        "<p>+249-74-43<br>Px-mew@mail.ru<br>St. Petersburg</p>" +
        "<p>position: QA tester <h3>30 000 rub.</h3>" +
        "<h2>Skills</h2>" +
        "<ul><li>basic knowledge of python;</li><li>skills of working with DBMS;</li><li>knowledge of CTMP, CSS;</li>"+
        "<li>Experience with Linux;</li><li>ready to work more than normal;</li><li>easy and fast learner.</li></ul>" +
        "<h2>Work experience</h2>" +
        "<p>July 2016 — August  2016</p>" +
        "<h3>CopySpb24 (Copy center)</h3>St. Petersburg<br>Manager"+
        "<p>September 2015 — Desember  2015</p>" +
        "<h3>Helix (medical laboratory)</h3>St. Petersburg<br>Database operator" + 
        "<h2>Higher education</h2>" + 
        "<p>2017</p>" + 
        "<h3>University of Information Technologies, Mechanics and Optics</h3><br>Laser  technology" +
        "<h2>Secondary special education</h2>" +
        "<p>2015</p>" + 
        "<h3>Programming in computer system</h3><br>Professional pedagogical college" + 
        "<p>2014</p>" + 
        "<h3>Linux basics</h3><br>Stepic.org" + 
        "<h2>Other information</h2>" +
        "<ul><li>I took the second place in the regional programming Olympiad;</li>" + 
        "<li>Participated in the Volgograd IT conference. Represented my own program to find the best solutions for Delphi.</li></ul>";

    document.getElementById("view").innerHTML = cv;

}
