class Beer < ActiveRecord::Base
	belongs_to :category
	belongs_to :color
	before_validation :normalize_name_id_marks_descrip
	validates :name, presence: true
	validates :quantity_small, :quantity_large, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 500 }
	validates :description, presence: true, length: { maximum: 255 }
	validates :abv, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
	validates :id_marks, presence: true, length: { maximum: 30 }
	validates :category_id, presence: true
	validates :color_id, presence: true

	protected

	def normalize_name_id_marks_descrip
		self.name = name.downcase.titleize
		self.id_marks = id_marks.downcase.titleize
		self.description = description.downcase.capitalize
	end
	

end
