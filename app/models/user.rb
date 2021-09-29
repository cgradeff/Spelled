class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 8}, allow_nil: true

    attr_reader :password

    has_many :listings,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Listing

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment


    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        bcrypt_obj = BCrypt::Password.new(self.password_digest)
        bcrypt_obj.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end