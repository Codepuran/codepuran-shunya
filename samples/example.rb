module Printable
  def print_info
    puts "#{self.class.name}: #{@name}"
  end
end

class Book
  include Printable
  attr_reader :name, :author

  def initialize(name, author)
    @name = name
    @author = author
  end

  def to_s
    "#{@name} by #{@author}"
  end
end

# Example usage
books = [
  Book.new("The Ruby Way", "Hal Fulton"),
  Book.new("Programming Ruby", "Dave Thomas")
]

books.each do |book|
  book.print_info
  puts "Details: #{book}"
  puts "-" * 20
end