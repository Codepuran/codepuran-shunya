<?php

trait Logger {
    public function log($message) {
        echo date('Y-m-d H:i:s') . ": $message\n";
    }
}

class UserManager {
    use Logger;

    private $users = [];

    public function addUser(string $username, string $email): void {
        $this->users[$username] = $email;
        $this->log("Added user: $username");
    }

    public function getUser(string $username): ?string {
        if (isset($this->users[$username])) {
            $this->log("Retrieved user: $username");
            return $this->users[$username];
        }
        $this->log("User not found: $username");
        return null;
    }
}

// Example usage
$manager = new UserManager();
$manager->addUser("john_doe", "john@example.com");
$manager->addUser("jane_doe", "jane@example.com");

$email = $manager->getUser("john_doe");
echo "John's email: " . ($email ?? "Not found") . "\n";