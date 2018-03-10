module GamesHelper
  def get_random_image
    image_path_prefix = "app/assets/images/"
    image_number = (1...7).sort_by{rand}[0..7]
    #image_files = Dir.glob("#{image_path_prefix}creation/*")
    #image_files.sample.split(image_path_prefix)[1]
  end
  
  def get_random_img 
    image_files = 
    {
      "1.jpg" => "Day & Night",
      "2.jpg" => "Sky & Water",
      "3.jpg" => "Land & Plants",
      "4.jpg" => "Sun",
      "5.jpg" => "Birds",
      "6.jpg" => "Animals & Human",
    }

  #image_files.to_a.shuffle.flatten(1);
  image_files.to_a.shuffle;
  end 

 
end

