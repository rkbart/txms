class TransactionValidator
  attr_reader :errors

  def initialize(transaction, csv_path:)
    @transaction = transaction
    @csv_path = csv_path
    @errors = []
  end

  def valid?
    @errors.clear
    validate_presence
    validate_account_number_format
    validate_amount
    errors.empty?
  end

  private

  def validate_presence
    required_fields = [
      "Transaction Date",
      "Account Number",
      "Account Holder Name",
      "Amount",
      "Status"
    ]

    required_fields.each do |field|
      value = @transaction[field]

      if value.nil? || value.strip.empty?
        errors << "#{field} is required"
      end
    end
  end

  def validate_account_number_format
    account_number = @transaction["Account Number"]
    return if account_number.nil? || account_number.match?(/^\d{4}-\d{4}-\d{4}$/)

    errors << "Account Number must be in the format XXXX-XXXX-XXXX"
  end

  def validate_amount
    amount = @transaction["Amount"].to_f
    errors << "Amount must be between 1 and 99,999" unless amount > 0 && amount <= 99_999
  end
end
