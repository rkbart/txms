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
    %w[Transaction\ Date Account\ Number Account\ Holder\ Name Amount Status].each do |field|
      value = @transaction[field]
      errors << "#{field} is required" if value.nil? || value.strip.empty?
    end
  end

  def validate_account_number_format
    account_number = @transaction["Account Number"]
    return if account_number.nil? || account_number.match?(/^\d{4}-\d{4}-\d{4}$/)

    errors << "Account Number must be in the format XXXX-XXXX-XXXX"
  end

  def validate_amount
    amount = @transaction["Amount"].to_f
    errors << "Amount must be between 1 and 10,000" unless amount > 0 && amount <= 10_000
  end
end
