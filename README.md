<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Score Keeper</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />
</head>

<body>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80"
                                    alt="" />
                            </figure>
                        </div>
                        <header class="card-header">
                            <p class="card-header-title">Ping Pong Score Keeper</p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <h1 class="title is-1">
                                    <span id="p1Display">0</span> to
                                    <span id="p2Display">0</span>
                                </h1>
                                <p class="subtitle">Use the buttons below to keep score</p>

                                <label for="playto" class="label is-large is-inline">Playing To</label>
                                <div class="field is-large is-inline">
                                    <input class="input is-medium is-inline" type="text" value="3" id="playto" />
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <button id="p1Button" class="is-primary button card-footer-item is-large">
                                +1 Player One
                            </button>
                            <button id="p2Button" class="is-info button card-footer-item is-large">
                                +1 Player Two
                            </button>
                            <button id="reset" class="is-danger button card-footer-item is-large">
                                Reset
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="app.js"></script>

    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Ping Pong Score Keeper
                </strong> by <a href="https://github.com/aramb-dev">Abdūr-Rahmān Bilāl</a>.
            </p>
        </div>
    </footer>
</body>

</html>
