<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>KurtBox</title>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="assets/styles/style.css" type="text/css" media="screen">
    </head>
    <body>

        <div class="menu">
            <nav class="links"></nav>
        </div>

        <div class="wrapper">

            <b class="menu-button">
                <span class="menu-link">Menu</span>
            </b>

            <main class="content">

                <?php
                    $folder = 'presentation/';
                    $files = glob($folder.'*.*');

                    for ($i = 0; $i < count($files); $i++) {
                        $fileName = substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder));

                        echo '<div class="image-container">';
                        echo '<h1 class="title">'.$fileName.'</h1>';
                        echo '<picture class="image-border"><img src="'.$files[$i].'" alt="'.$fileName.'"></picture>';
                        echo '</div>';
                    }
                ?>

            </main>

            <footer class="footer">
                <span class="copyright">
                    <a href="https://github.com/fabiorlobo/KurtBox">KurtBox</a> | <a href="https://www.fabiolobo.com.br">Fabio Lobo</a>
                </span>
            </footer>

        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="assets/scripts/anchorific.min.js"></script>
        <script src="assets/scripts/scripts.js"></script>

    </body>
</html>
