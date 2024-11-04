CREATE TABLE payments (
    payment_id BIGINT PRIMARY KEY AUTO_INCREMENT,   -- Unique identifier for each payment
    user_gid VARCHAR(255) NOT NULL,                 -- Foreign key to the students table (referencing gid)
    amount DECIMAL(10, 2) NOT NULL,                 -- Payment amount
    currency VARCHAR(3) DEFAULT 'USD',              -- Currency code (e.g., USD, EUR)
    payment_status VARCHAR(20) NOT NULL,            -- Status: 'Pending', 'Completed', 'Failed', etc.
    transaction_id VARCHAR(255),                    -- Unique transaction ID from the payment gateway
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of the payment

    -- Non-sensitive card information
    card_last_four VARCHAR(4),                      -- Last 4 digits of the card
    card_type VARCHAR(20),                          -- Card type, e.g., 'Visa', 'MasterCard'
    card_expiry_month INT,                          -- Expiry month
    card_expiry_year INT,                           -- Expiry year

    -- Foreign key to link with students table using gid
    FOREIGN KEY (user_gid) REFERENCES students(gid)
);
