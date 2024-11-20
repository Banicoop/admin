# Contribution Cell Management System

## 1. User Contribution Workflow

### 1.1 User Eligibility Requirements
- KYC Level Check
  - Users must be at minimum KYC Level 2 to participate
  - Block access for Level 1 users
  - Prompt user to complete KYC upgrade

### 1.2 Contribution Signup Process
#### Input Requirements:
- User ID (from authentication system)
- Salary Information
- Proof of Salary Document (Image Upload)

#### Validation Rules:
- Salary must be a valid numeric value
- Salary proof document must be uploaded
- User cannot have existing contribution signup

### 1.3 Available Contribution Cells
#### Filtering Options:
- Filter by contribution type (daily/weekly/monthly)
- Filter by start/end dates
- Filter by active/available status

#### Cell Eligibility Criteria:
- Maximum contribution amount based on user's iScore
- Must match user's maximum contribution cell limit
- Show only cells user can join based on financial criteria

## 2. Contribution Cell Creation

### 2.1 Cell Creation Parameters
- Cell Name
- Total Users (Strict Range Requirements)
  - Daily: 59-364 users
  - Weekly: 7-51 users
  - Monthly: 6-11 users
- Real User Count (Must be 2 less than total users)
- Contribution Type (daily/weekly/monthly)
- Contribution Amount
- Duration Validation
  - Daily: 60-365 days
  - Weekly: 8-52 weeks
  - Monthly: 7-12 months
- Launch Date
- End Date
- Description (Minimum 10 words)

### 2.2 Duration Calculation Validation
- Automatically validate launch and end dates match specified duration
- Prevent manual overrides of duration calculation

## 3. Contribution Cell Joining

### 3.1 Cell Joining Requirements
- User must have completed contribution signup
- Cell must be available for joining
- User's maximum contribution amount must exceed cell's contribution amount
- Real user limit must not be exceeded
- Remittance date required during joining

### 3.2 User Arrangement Logic
- Users arranged based on:
  1. iScore
  2. Previous contribution payment history
- First two positions always virtual users
- No consecutive real users in arrangement
- Randomized virtual user placement

## 4. Payment Processing

### 4.1 Payment Interval
- Depends on contribution type:
  - Daily: Daily payments
  - Weekly: Weekly payments
  - Monthly: Monthly payments

### 4.2 Payment Calculation
- Total payment = Contribution amount * Total users
- Deduct outstanding debt from payment
- Skip payment for virtual users

## 5. User Interface Components

### 5.1 Contribution Dashboard
- Available Cells View
- Joined Cells View
- Cell Details Modal
- Contribution Signup Form
- Cell Creation Form

### 5.2 Validation Indicators
- Real-time form validation
- Error messages for specific rule violations
- Tooltip explanations for complex rules

## 6. System Constraints

### 6.1 User Restrictions
- One-time contribution signup
- Limited to specific contribution cell types
- Restricted by iScore and financial capacity

### 6.2 Cell Lifecycle
- Cells move through states: Available → Launching → Active → Completed
- Automatic state transitions based on user participation=