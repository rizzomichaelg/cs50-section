<?php

    /**
     * config.php
     *
     * Section 6
     *
     * Configures pages.
     */

    // display errors, warnings, and notices
    ini_set("display_errors", true);
    error_reporting(E_ALL);

    // requirements
    require("constants.php");
    require("functions.php");

    date_default_timezone_set('ETA');

    // enable sessions
    session_start();

?>
