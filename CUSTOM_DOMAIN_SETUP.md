# 🌐 Configuração de Domínio Customizado - lawdesk.com.br

## ✅ Arquivos Configurados

Os seguintes arquivos foram atualizados para suportar o domínio customizado **lawdesk.com.br**:

- ✅ `public/CNAME` - Criado com lawdesk.com.br
- ✅ `vite.config.ts` - Base path alterado para "/"
- ✅ `package.json` - Homepage atualizada para https://lawdesk.com.br/
- ✅ `public/404.html` - Configurado para domínio customizado
- ✅ `index.html` - Meta tags atualizadas

## 🔧 Configuração DNS Necessária

### Opção 1: CNAME (Recomendado)

Configure no seu provedor DNS (Registro.br, Cloudflare, etc.):

```dns
Tipo: CNAME
Nome: lawdesk (ou @)
Valor: SEU_USUARIO.github.io
TTL: 3600
```

### Opção 2: Registros A (Alternativo)

Se CNAME não funcionar, use os IPs do GitHub Pages:

```dns
Tipo: A
Nome: @ (ou lawdesk)
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nome: @ (ou lawdesk)
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @ (ou lawdesk)
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @ (ou lawdesk)
Valor: 185.199.111.153
TTL: 3600
```

### Para WWW (Opcional):

```dns
Tipo: CNAME
Nome: www
Valor: lawdesk.com.br
TTL: 3600
```

## ⚙️ Configuração no GitHub

### Passo 1: Repositório GitHub

1. Vá para seu repositório no GitHub
2. Clique em **Settings**
3. Role até a seção **Pages**
4. Em **Custom domain**, digite: `lawdesk.com.br`
5. Clique **Save**

### Passo 2: Aguardar Verificação DNS

- GitHub verificará automaticamente as configurações DNS
- Pode levar até 24 horas para propagar

### Passo 3: Habilitar HTTPS

1. Após DNS verificado, marque **"Enforce HTTPS"**
2. GitHub automaticamente configurará o certificado SSL

## 📋 Checklist de Configuração

### DNS Provider (Registro.br/Cloudflare/etc.)

- [ ] **CNAME configurado**: lawdesk → SEU_USUARIO.github.io
- [ ] **Propagação DNS**: Testada (use dig ou nslookup)
- [ ] **TTL adequado**: 3600 segundos ou menos

### GitHub Pages

- [ ] **Custom domain**: lawdesk.com.br configurado
- [ ] **DNS check**: ✅ Verde no GitHub Pages settings
- [ ] **HTTPS**: Habilitado (após verificação DNS)
- [ ] **Arquivo CNAME**: Presente no repositório

### Build & Deploy

- [ ] **Mudanças commitadas**: Todos os arquivos atualizados
- [ ] **Deploy executado**: GitHub Actions rodou com sucesso
- [ ] **Base path**: Configurado como "/" para domínio customizado

## 🔍 Como Testar DNS

### Teste 1: nslookup

```bash
nslookup lawdesk.com.br
# Deve retornar IPs do GitHub Pages
```

### Teste 2: dig (Linux/Mac)

```bash
dig lawdesk.com.br
# Deve mostrar CNAME ou registros A corretos
```

### Teste 3: Online

- Use: https://dnschecker.org/
- Digite: lawdesk.com.br
- Verifique se resolve para GitHub Pages

## 🚨 Problemas Comuns e Soluções

### ❌ "Domain does not resolve to GitHub Pages"

**Causa**: DNS mal configurado
**Solução**:

1. Verifique CNAME no DNS provider
2. Aguarde propagação (até 24h)
3. Use registros A se CNAME não funcionar

### ❌ "HTTPS not available"

**Causa**: GitHub ainda verificando domínio
**Solução**:

1. Aguarde verificação DNS completar
2. Não force HTTPS até DNS estar OK
3. Verifique se CNAME arquivo está no repositório

### ❌ "404 Page Not Found"

**Causa**: Base path incorreto ou deploy não executado
**Solução**:

1. Verifique `vite.config.ts` base: "/"
2. Execute novo deploy
3. Aguarde 5-10 minutos

### ❌ "CSS/JS não carregam"

**Causa**: Assets com path incorreto
**Solução**:

1. Limpe cache do browser
2. Verifique base path no vite.config.ts
3. Execute build:github novamente

## 📱 Configuração de Redirect (Opcional)

Para redirecionar www para apex domain, configure no DNS:

```dns
# Registro CNAME para www
Tipo: CNAME
Nome: www
Valor: lawdesk.com.br
```

## 🔒 Configuração SSL/HTTPS

O GitHub Pages configurará automaticamente o certificado SSL quando:

1. ✅ DNS estiver corretamente configurado
2. ✅ Domínio verificado pelo GitHub
3. ✅ CNAME arquivo presente no repositório

**⏱ Tempo esperado**: 15 minutos a 24 horas

## 🎯 Resultado Esperado

Após configuração completa:

- ✅ `https://lawdesk.com.br` → Carrega sua aplicação Lawdesk
- ✅ `https://www.lawdesk.com.br` → Redireciona para lawdesk.com.br
- ✅ Certificado SSL válido
- ✅ Todas as páginas funcionam (/crm, /sign-in, etc.)
- ✅ Assets (CSS, JS, imagens) carregam corretamente

## 📞 Próximos Passos

1. **Configure o DNS** no seu provedor (Registro.br)
2. **Commit e push** as mudanças do código
3. **Configure custom domain** nas settings do GitHub
4. **Aguarde propagação DNS** (até 24h)
5. **Habilite HTTPS** quando disponível
6. **Teste** lawdesk.com.br

---

**⚠️ Importante**: Mantenha o arquivo CNAME no repositório, não delete após configurar!
