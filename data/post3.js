// data/post3.js
window.post3Data = {
  "id": "post3",
  "title": "What is a hash function?",
  "image": "images/hash-function.jpg",
  "description": "Hash functions work behind the scenes to keep your data secure.You use it everyday.",
  "date": "2025-10-30",
  "content": `
    <p>
      Every time you log into a website, download software, or make an online 
      payment, hash functions work behind the scenes to keep your data secure. 
      These mathematical tools convert information into unique strings of characters, 
      helping verify passwords, check file integrity, and secure digital transactions.
    </p>
    <p>
      Hash functions are crucial in modern cybersecurity, from protecting your credentials 
      to powering blockchain technology. Let’s break down hash functions, how they work, and 
      why they matter for everyday internet users.
    </p>
    <h3>What is a hash function?</h3>
    <p>
      A cryptographic hash function is a mathematical algorithm that converts data of any size 
      into a fixed-length string called a hash value or digest. This process creates a unique 
      digital fingerprint for the input, ensuring consistency in output length regardless of 
      input size. <br>
      What makes hash functions so efficient is their one-way nature. You can easily convert 
      information into a hash, but it’s impossible to reverse it and recreate the original data 
      from the hash value. This property makes hash functions perfect for verifying data without 
      exposing sensitive information. <br>
      Hash functions are deterministic, meaning the same input will always produce the same hash 
      value. Change even a single character in your input, and the hash generates a different digital 
      fingerprint. <br>
      For example, the phrase “Hello World” might produce a fixed-length output like 
      “a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e” when using a common algorithm 
      called SHA-256. Add just a period at the end (“Hello World.”) and the hash value transforms into 
      something completely different. <br>
      This unique combination of properties makes one-way function hash algorithms invaluable for data 
      verification and security applications where you need to confirm information hasn’t been altered.
      Hash functions play a key role in digital signatures, where the message hash is signed using the 
      public key/private key system to ensure authenticity and integrity.
    </p>

    <a href="https://www.ssldragon.com/blog/what-is-hash-function/" 
        style="color:#D66B31; text-decoration:underline;">Credits
    </a>
`
};
