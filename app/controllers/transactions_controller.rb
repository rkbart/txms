class TransactionsController < ApplicationController
  CSV_FILE_PATH = Rails.root.join("storage", "transactions.csv")

  def index
    transactions = CSV.read(CSV_FILE_PATH, headers: true)
    render json: transactions.map(&:to_h)
  end

  def create
    transaction_data = params.require(:transaction).permit(
      "Transaction Date",
      "Account Number",
      "Account Holder Name",
      "Amount",
      "Status"
    ).to_h

    validator = TransactionValidator.new(transaction_data, csv_path: CSV_FILE_PATH)
    unless validator.valid?
      return render json: { errors: validator.errors }, status: :unprocessable_entity
    end

    File.write(CSV_FILE_PATH, "\n", mode: "a") unless File.read(CSV_FILE_PATH).end_with?("\n")
    CSV.open(CSV_FILE_PATH, "a") { |csv| csv << transaction_data.values }

    render json: transaction_data, status: :created
  end
end
