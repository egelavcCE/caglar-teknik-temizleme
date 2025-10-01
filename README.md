# React TypeScript Projesi

Modern bir React TypeScript projesi, geliştirmeye hazır durumda.

## 🚀 Özellikler

- ✅ **React 19.1.1** - En son React sürümü
- ✅ **TypeScript 4.9.5** - Tip güvenliği için
- ✅ **Modern ES6+ Desteği** - En son JavaScript özellikleri
- ✅ **Hot Reload** - Geliştirme sırasında anlık güncelleme
- ✅ **Test Ortamı** - Jest ile test desteği
- ✅ **Component Yapısı** - Organize edilmiş klasör yapısı
- ✅ **Utility Fonksiyonları** - Yardımcı fonksiyonlar
- ✅ **Type Definitions** - TypeScript tip tanımları

## 📁 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   └── Button.tsx      # Örnek Button bileşeni
├── utils/              # Yardımcı fonksiyonlar
│   └── index.ts        # Utility fonksiyonları
├── types/              # TypeScript tip tanımları
│   └── index.ts        # Global tip tanımları
├── App.tsx             # Ana uygulama bileşeni
├── App.css             # Ana stil dosyası
└── index.tsx           # Uygulama giriş noktası
```

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js v18.19.1 veya üzeri
- npm v10.9.0 veya üzeri

### Komutlar

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start

# Production build oluştur
npm run build

# Testleri çalıştır
npm test
```

## 🎯 Kullanım

Proje tarayıcınızda `http://localhost:3000` adresinde çalışacaktır.

### Demo Özellikler
- **Counter Bileşeni**: Artırma, azaltma ve sıfırlama
- **Button Bileşeni**: Farklı varyantlar (primary, secondary, danger)
- **Utility Fonksiyonları**: Tarih formatlama, ID üretme
- **TypeScript Desteği**: Tip güvenliği ve IntelliSense

## 📝 Geliştirme

### Yeni Bileşen Ekleme
```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onClick}>Tıkla</button>
    </div>
  );
};

export default MyComponent;
```

### Yeni Tip Tanımlama
```typescript
// src/types/index.ts
export interface MyInterface {
  id: number;
  name: string;
  isActive: boolean;
}
```

### Utility Fonksiyon Ekleme
```typescript
// src/utils/index.ts
export const myUtilityFunction = (param: string): string => {
  return param.toUpperCase();
};
```

## 🔧 Konfigürasyon

### TypeScript Path Mapping
`tsconfig.json` dosyasında path mapping yapılandırılmıştır:

```json
{
  "baseUrl": "src",
  "paths": {
    "@/*": ["*"],
    "@/components/*": ["components/*"],
    "@/utils/*": ["utils/*"],
    "@/types/*": ["types/*"]
  }
}
```

Bu sayede import'ları şu şekilde kullanabilirsiniz:
```typescript
import Button from '@/components/Button';
import { formatDate } from '@/utils';
import { User } from '@/types';
```

## 📦 Ek Paketler

İhtiyacınıza göre şu paketleri ekleyebilirsiniz:

```bash
# State management
npm install @reduxjs/toolkit react-redux

# Routing
npm install react-router-dom

# UI Framework
npm install @mui/material @emotion/react @emotion/styled

# HTTP Client
npm install axios

# Form handling
npm install react-hook-form

# Styling
npm install styled-components
```

## 🚀 Deployment

### Netlify/Vercel
```bash
npm run build
# build/ klasörünü deploy edin
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

---

**Geliştirmeye başlamak için `src/App.tsx` dosyasını düzenleyin!** 🎉