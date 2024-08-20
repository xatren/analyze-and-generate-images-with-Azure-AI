# Azure ve OpenAI ile Görüntü Analizi ve Oluşturma

## Genel Bakış

Bu proje, kullanıcıların Azure AI Vision ve OpenAI'nin DALL·E 3 modelini kullanarak görüntüleri analiz etmelerine ve oluşturmasına olanak tanıyan React tabanlı bir web uygulamasıdır. Kullanıcılar bir görüntü yükleyebilir veya analiz için bir URL sağlayabilir ve metin istemlerine dayalı olarak görüntüler oluşturabilir.

## Özellikler

- **Görüntü Analizi:** Azure AI Vision kullanarak görüntüleri analiz edin ve ayrıntılı açıklamalar, kategoriler ve renkler elde edin.
- **Görüntü Oluşturma:** OpenAI'nin DALL·E 3 modelini kullanarak metin istemlerine dayalı olarak görüntüler oluşturun.
- **Görüntü İndirme:** Oluşturulan görüntüleri doğrudan cihazınıza indirin.
- **Sıfırlama İşlevi:** Yeni bir analiz veya oluşturma başlatmak için uygulamayı kolayca sıfırlayın.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzleri oluşturmak için kullanılan frontend JavaScript kütüphanesi.
- **Azure AI Vision:** Görüntü analizi için kullanılan hizmet.
- **OpenAI DALL·E 3:** Metin istemlerinden görüntüler oluşturmak için kullanılan model.
- **GitHub Actions:** Azure Static Web Apps'e sürekli entegrasyon/sürekli dağıtım (CI/CD) için kullanılır.

## Kurulum ve Yükleme

### Gereksinimler

- **Node.js** (v14 veya üzeri)
- **npm** (Node Paket Yöneticisi)
- **Azure Hesabı:** Azure AI hizmetlerini oluşturmak için.
- **OpenAI Hesabı:** OpenAI API'ye erişmek için.

### Yükleme

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/xatren/analyze-and-generate-images-with-Azure-AI.git
   cd analyze-and-generate-images-with-Azure-AI
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Proje kök dizininde `.env` dosyası oluşturun ve aşağıdaki ortam değişkenlerini ekleyin:
   ```plaintext
   REACT_APP_AZURE_VISION_ENDPOINT=azure-vision-endpoint
   REACT_APP_AZURE_VISION_KEY=azure-vision-key
   REACT_APP_OPENAI_API_KEY=openai-api-key
   ```

### Uygulamayı Çalıştırma

Uygulamayı yerel olarak çalıştırmak için:

```bash
npm start
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## Kullanım

1. **Bir Görüntüyü Analiz Etme:**
   - Bir görüntü yükleyin veya bir görüntü URL'si sağlayın.
   - "Analyze Image" butonuna tıklayarak görüntüyü analiz edin.

2. **Bir Görüntü Oluşturma:**
   - Bir metin istemi girin.
   - "Generate Image" butonuna tıklayarak yeni bir görüntü oluşturun.
   - Oluşturulan görüntüyü "Download Image" butonunu kullanarak indirin.

3. **Sıfırlama:**
   - "Reset" butonuna tıklayarak mevcut oturumu temizleyin ve yeni bir başlangıç yapın.

## Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Bu repoyu fork edin ve iyileştirmelerinizle bir pull request gönderin.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

