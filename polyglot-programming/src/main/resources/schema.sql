CREATE TABLE worker (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    category VARCHAR(255) NOT NULL,
    per_day_wage FLOAT(43),
    days INT
);