CREATE SCHEMA IF NOT EXISTS some_database DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
CREATE USER IF NOT EXISTS some_user@'%' IDENTIFIED BY 'some_password';
GRANT ALL PRIVILEGES ON some_database.* TO 'some_user'@'%' WITH GRANT OPTION;
CREATE TABLE IF NOT EXISTS `some_database`.`posts` (
  `postID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `post` TEXT NOT NULL,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`postID`));
USE some_database;
INSERT INTO posts (name, post) VALUES ('Jóska', 'Háááddemicsinász!');
INSERT INTO posts (name, post) VALUES ('Géza', 'Pont azt!');
INSERT INTO posts (name, post) VALUES ('Jenő', 'Nem?!');
INSERT INTO posts (name, post) VALUES ('Juli', 'DE!!!!');