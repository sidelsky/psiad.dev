<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'psiad.dev');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'root');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'root');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j4t[zu4BxkaY+S5=ijYSn[SUb,g&Q=;$KIoBD~X|bazr1>}:hm/Y/PY*|K5uC^Gs');
define('SECURE_AUTH_KEY',  'DO0pYY|&`g-QwMA([(-+pvt1g5V6KlIzH`Ac4BH;+51}e-vyQFK#(<kxPm=~V11:');
define('LOGGED_IN_KEY',    'Itm8~uf^kL4*z vbce|g/FDGFLd1Gtj,8FtBCfkm,C WW}`mav?|&*<W8xDFa,D]');
define('NONCE_KEY',        'x-i/{~zzwf2iGz7,B,5jM:EaD~7N?(|1+X@w+}eMv:Q|q2l<GK%TbeT%#X,f5EvD');
define('AUTH_SALT',        '6,q#&ig$s~e{Ko&lj|7UI|0}0(z|+|2T,c4DrEwA/K;U7g|w8i|,/c{%EyR.ASyj');
define('SECURE_AUTH_SALT', 'a*Q`9~e!-[uJ_3$P4T;$xG HS[6~Kr-s8+v@hs~+58BLO;G/N6H7])1:oI,VIX^m');
define('LOGGED_IN_SALT',   'i-]SEz=6Ftfb~bR+Jw1<qBuDG2rWhX]=M--vN-8k|D+80SE[7-O.he-GfGU+|L%L');
define('NONCE_SALT',       '9-!^^h&9[69]]qaB,~hl@)t%@,X_A|4<sZ-s4kWzo-qD]{)lW`aI2q%83q(U.JJ ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
