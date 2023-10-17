<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mi_primer_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f%CyfM.A%a-dRVQOAh)c/{hL}d=EE^wiTwlxVgQ9*>zLfwVfU`7Jo3gT-|a60@74' );
define( 'SECURE_AUTH_KEY',  'l8<<DE7gM]]~Ow~M*23LPNQz&Y{3N1[NBT3ATrs?vL;Sw9EHB$k Hm-#m-S !0do' );
define( 'LOGGED_IN_KEY',    'iES{X@xuf]xEcY{;^?BrgQt@8)X`j k{j)4k(;cN(!xq{SAb8vbsiIA^mpUhhLo@' );
define( 'NONCE_KEY',        ')S^s&r1,vPtZ-}{={<3*knh80`3k(Ii5(H<?, 2tT3%O,HlGi`W_fU2Vu8mX(15J' );
define( 'AUTH_SALT',        '%fMv45F!Ha9/GYN+UYfy7]@yyFd&I5Vx%xkMHBY3GJf$ADLcV|$Y](4P1]fF>Yz%' );
define( 'SECURE_AUTH_SALT', '9h`+db2r?7t~~/;@CR/eeFNxaX2tTD::k#IX3|GOvszQ!/P)}2cbiU@q!b!_iz,]' );
define( 'LOGGED_IN_SALT',   'C#1 ,^!n{nn|8K2hPo0*=$/2./>$$oKWYUy%)VUQwCNqrBZ CCCN_XW(/Y_y(gAZ' );
define( 'NONCE_SALT',       '<0Y~4~Z~bl/%*LA%aUuVXGyFlCx;JiJx*d7!-0qg!c-w,v:cggK%dRY%H_]vvij<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpmi_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
