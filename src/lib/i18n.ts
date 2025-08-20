export type Language = 'es' | 'en' | 'fr' | 'pt';

export const translations = {
  es: {
    nav: {
      products: "Herramientas",
      insights: "Insights",
      roadmap: "Roadmap",
      support: "Soporte",
      signin: "Iniciar sesión",
      createAccount: "Crear cuenta"
    },
    hero: {
      title: "El futuro del trading es IA.",
      subtitle: "ORA IA combina inteligencia artificial y experiencia financiera global para generar retornos óptimos, bajo cualquier momentum del mercado.",
      tagline: "El futuro del trading es IA. Potencia tus herramientas de trading con inteligencia."
    },
    cta: {
      join: "Acceder a Whitelisting",
      products: "Ver herramientas",
      getStarted: "Comenzar ahora",
      learnMore: "Saber más"
    },
    products: {
      title: "Nuestras Herramientas",
      subtitle: "Herramientas de trading automatizado con IA para optimizar tu experiencia",
      comingSoon: "Próximamente",
      joinWhitelist: "Únete al Whitelist",
      monthlyTarget: "Referencia histórica (datos pasados)",
      riskLevels: {
        low: "Bajo",
        medium: "Medio",
        high: "Alto",
        veryHigh: "Muy Alto"
      },
      highRiskWarning: "Herramienta de alta volatilidad. Puede resultar en pérdidas de criptoactivos.",
      multicrypto: {
        title: "Herramienta Multicripto Spot",
        description: "Herramienta automatizada para múltiples criptomonedas con referencia histórica del 2% mensual (datos pasados)"
      },
      staking: {
        title: "Herramienta Staking USDT/USDC",
        description: "Perfil conservador con referencia histórica del 1% mensual para usuarios que buscan estabilidad"
      },
      stocks: {
        title: "Herramienta Acciones Spot",
        description: "Herramienta automatizada para acciones con referencia histórica del 2% mensual"
      },
      futures: {
        title: "Herramienta Futuros Cripto",
        description: "Herramienta de futuros de alta volatilidad con referencia histórica del 3% mensual"
      },
      hunter: {
        title: "El Cazador",
        description: "Indicador de señales que rastrea tokens con alta volatilidad. Gracias a su lógica avanzada, identifica patrones que históricamente han mostrado variaciones significativas. Es una herramienta de alta volatilidad, con variaciones que pueden ser muy amplias.",
        beginner: "Principiante: USD 35/mes, señales cada 6h (ETH/BSC/SOL) vía Telegram",
        expert: "Experto: USD 90/mes, señales + trading automático conectado a wallet"
      }
    },
    auth: {
      signin: "Iniciar sesión",
      signup: "Crear cuenta",
      email: "Correo electrónico",
      password: "Contraseña",
      confirmPassword: "Confirmar contraseña",
      fullName: "Nombre completo",
      phone: "Teléfono",
      country: "País",
      language: "Idioma",
      forgotPassword: "¿Olvidaste tu contraseña?",
      createAccount: "Crear cuenta",
      alreadyHaveAccount: "¿Ya tienes cuenta?",
      dontHaveAccount: "¿No tienes cuenta?",
      continueWith: "o continúa con",
      google: "Google",
      apple: "Apple",
      facebook: "Facebook",
      socialLogin: "Iniciar sesión con",
      socialSignup: "Registrarse con",
      orDivider: "o",
      optional: "opcional",
      selectCountry: "Seleccionar país",
      loading: {
        signingIn: "Iniciando sesión...",
        creatingAccount: "Creando cuenta..."
      },
      errors: {
        mustAcceptPolicies: "Debe aceptar ambas políticas para continuar",
        passwordsMismatch: "Las contraseñas no coinciden"
      },
      wallet: {
        connected: "Wallet Conectada",
        connect: "Conectar con Wallet"
      }
    },
    legal: {
      dataPolicy: {
        title: "Política de Tratamiento de Datos",
        ctaAccept: "Aceptar política de tratamiento de datos",
        updated: "Última actualización",
        version: "Versión"
      },
      volatility: {
        title: "Disclaimer de Riesgos de Volatilidad",
        ctaAccept: "Aceptar los riesgos de volatilidad"
      },
      fundsOrigin: {
        title: "Declaración de Origen de Fondos",
        ctaAccept: "Aceptar declaración de origen de fondos"
      },
      ctaClose: "Cerrar",
      ctaContinueReading: "Continuar leyendo",
      scrollRequired: "Debe leer completamente el documento para continuar",
      accept: "Aceptar términos",
      continueReading: "Continuar leyendo",
      acceptDataPolicy: "Aceptar política de tratamiento de datos",
      acceptRiskDisclaimer: "Aceptar los riesgos de volatilidad",
      acceptFundOrigin: "Aceptar declaración de origen de fondos",
      // Textos extensos de los documentos legales
      dataPolicyText: `# POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES

**<CompanyName>** - Versión v2024.12.20

---

## 1. INTRODUCCIÓN Y ALCANCE

**<CompanyName>** (en adelante, la "**Compañía**", "**nosotros**" o "**ORA IA**"), con domicilio en **<ContactAddress>**, es una plataforma tecnológica que ofrece herramientas de trading automatizado con inteligencia artificial aplicadas a criptomonedas y activos financieros (los "**Servicios**").

Esta Política de Tratamiento de Datos Personales (la "**Política**") establece los términos y condiciones bajo los cuales **<CompanyName>** recolecta, almacena, usa, circula y suprime los datos personales de:

- **Usuarios registrados**: personas que crean cuenta en **<ProductName>**
- **Leads y prospectos**: visitantes que proporcionan información de contacto
- **Participantes de whitelist**: personas que se registran para acceso anticipado
- **Clientes activos**: usuarios que utilizan nuestros servicios de trading automatizado
- **Visitantes del sitio web**: personas que navegan en nuestras propiedades digitales

### Territorios de Aplicación

Esta Política aplica a personas ubicadas en:
- **Colombia**: bajo la Ley 1581 de 2012 y Decreto 1377 de 2013
- **Latinoamérica**: considerando principios generales de protección de datos regionales
- **Unión Europea**: conforme al Reglamento General de Protección de Datos (GDPR)

---

## 2. BASE LEGAL PARA EL TRATAMIENTO

### 2.1 Colombia (Ley 1581 de 2012)

El tratamiento de datos personales se fundamenta en:
- **Consentimiento previo, expreso e informado** del titular
- **Ejecución de contrato** del cual el titular es parte
- **Cumplimiento de obligación legal** aplicable al responsable
- **Protección de intereses vitales** del titular o de terceros
- **Ejercicio de funciones de autoridad pública**
- **Interés legítimo** del responsable, siempre que no prevalezcan los derechos del titular

### 2.2 Unión Europea (GDPR)

Conforme al artículo 6 del GDPR, el tratamiento se basa en:
- **Consentimiento** del interesado (art. 6.1.a)
- **Ejecución de contrato** o medidas precontractuales (art. 6.1.b)
- **Cumplimiento de obligación legal** (art. 6.1.c)
- **Protección de intereses vitales** (art. 6.1.d)
- **Interés público o ejercicio de poderes públicos** (art. 6.1.e)
- **Interés legítimo** del responsable o terceros (art. 6.1.f)

### 2.3 Principios Aplicables

- **Licitud, lealtad y transparencia**
- **Limitación de la finalidad**
- **Minimización de datos**
- **Exactitud**
- **Limitación del plazo de conservación**
- **Integridad y confidencialidad**
- **Responsabilidad proactiva**

---

## 3. DEFINICIONES

- **Dato Personal**: información vinculada o que pueda asociarse a una persona natural
- **Dato Sensible**: información que afecta la intimidad o puede generar discriminación
- **Responsable**: entidad que decide sobre el tratamiento (ORA IA)
- **Encargado**: entidad que trata datos por cuenta del responsable
- **Tratamiento**: cualquier operación sobre datos personales
- **Transferencia**: envío de datos a un tercero responsable
- **Transmisión**: envío de datos a un encargado
- **Anonimización**: proceso que impide identificar al titular
- **Seudonimización**: tratamiento que impide identificar sin información adicional

---

## 4. CATEGORÍAS DE DATOS TRATADOS

### 4.1 Datos de Identificación
- Nombre completo
- Número de documento de identidad
- Fecha y lugar de nacimiento
- Nacionalidad
- Fotografía (para verificación KYC)

### 4.2 Datos de Contacto
- Dirección de correo electrónico
- Número de teléfono móvil y fijo
- Dirección física
- País y ciudad de residencia

### 4.3 Datos KYC/AML (Conozca a su Cliente)
- Documentos de identificación
- Comprobantes de ingresos
- Información sobre origen de fondos
- Actividad económica y profesión
- Condición PEP (Persona Expuesta Políticamente)
- Verificaciones en listas de sanciones

### 4.4 Datos Transaccionales
- Historial de operaciones de trading
- Montos depositados y retirados
- Carteras de criptomonedas vinculadas
- Configuraciones de herramientas automatizadas
- Rendimientos y pérdidas

### 4.5 Datos Técnicos
- Dirección IP y geolocalización aproximada
- Información del dispositivo y navegador
- Logs de actividad y acceso
- Cookies y tecnologías similares
- Datos de uso de la plataforma

### 4.6 Datos de Preferencias
- Configuraciones de cuenta
- Preferencias de comunicación
- Idioma y zona horaria
- Notificaciones habilitadas

---

## 5. FINALIDADES DEL TRATAMIENTO

### 5.1 Creación y Gestión de Cuenta
- Verificar identidad del usuario
- Crear y mantener perfil de usuario
- Autenticar accesos a la plataforma
- Gestionar configuraciones de cuenta

### 5.2 Verificación de Identidad (KYC/AML)
- Cumplir obligaciones de prevención de lavado de activos
- Verificar origen lícito de fondos
- Screening en listas de sanciones internacionales
- Reportes a autoridades cuando sea requerido

### 5.3 Operación del Servicio
- Ejecutar herramientas de trading automatizado
- Procesar depósitos y retiros
- Mantener historiales transaccionales
- Proporcionar soporte técnico

### 5.4 Soporte al Cliente
- Responder consultas y solicitudes
- Resolver incidencias técnicas
- Proporcionar asistencia especializada
- Gestionar reclamos y sugerencias

### 5.5 Marketing y Comunicaciones (con consentimiento)
- Enviar newsletters y actualizaciones de producto
- Comunicar nuevas funcionalidades
- Invitar a eventos y webinars
- Realizar encuestas de satisfacción
- **Derecho de oposición**: puede retirar consentimiento en cualquier momento

### 5.6 Analítica y Mejora del Servicio
- Analizar patrones de uso de la plataforma
- Optimizar rendimiento técnico
- Desarrollar nuevas funcionalidades
- Realizar estudios de mercado agregados

### 5.7 Cumplimiento Normativo
- Cumplir obligaciones legales aplicables
- Responder requerimientos de autoridades
- Mantener registros para auditorías
- Implementar medidas de seguridad

### 5.8 Seguridad y Prevención de Fraude
- Detectar actividades sospechosas
- Prevenir accesos no autorizados
- Implementar controles de seguridad
- Investigar posibles infracciones

---

## 6. DERECHOS DEL TITULAR

### 6.1 Derechos Fundamentales
- **Acceso**: conocer qué datos tratamos y cómo
- **Rectificación**: corregir datos inexactos o incompletos
- **Actualización**: mantener datos vigentes y precisos
- **Supresión/Cancelación**: solicitar eliminación de datos
- **Oposición**: objetar ciertos tratamientos

### 6.2 Derechos GDPR Adicionales
- **Portabilidad**: recibir datos en formato estructurado
- **Limitación**: restringir ciertos tratamientos
- **No ser objeto de decisiones automatizadas** sin garantías apropiadas

### 6.3 Procedimiento para Ejercer Derechos

**Canales disponibles**:
- Correo electrónico: **<ContactEmail>**
- Delegado de Protección de Datos: **<DPOEmail>**
- Dirección física: **<ContactAddress>**

**Información requerida**:
- Identificación del titular
- Descripción clara de la solicitud
- Documentos que acrediten identidad

**Tiempos de respuesta**:
- Colombia: máximo 15 días hábiles
- UE: máximo 30 días (prorrogables 60 días en casos complejos)

**Escalamiento**:
- Colombia: Superintendencia de Industria y Comercio (SIC)
- UE: Autoridad de Protección de Datos local
- Otros países: autoridad competente correspondiente

### 6.4 Revocatoria del Consentimiento

Puede retirar su consentimiento en cualquier momento sin afectar la licitud del tratamiento previo. La revocatoria se puede realizar:
- Desde configuraciones de cuenta
- Enviando solicitud a **<ContactEmail>**
- Enlaces de "darse de baja" en comunicaciones

---

## 7. TRANSFERENCIAS Y DESTINATARIOS

### 7.1 Proveedores de Servicios (Encargados)
- **Proveedores de nube**: almacenamiento y procesamiento
- **Procesadores de pagos**: transacciones financieras
- **Servicios KYC/AML**: verificación de identidad
- **Proveedores de soporte**: asistencia técnica
- **Servicios de analítica**: métricas de uso

### 7.2 Terceros Responsables
- **Exchanges de criptomonedas**: para ejecución de operaciones
- **Proveedores de datos de mercado**: información financiera
- **Auditores externos**: revisiones de cumplimiento

### 7.3 Transferencias Internacionales

**Garantías aplicables**:
- **Decisiones de adecuación** de la Comisión Europea
- **Cláusulas Contractuales Tipo** (SCCs) aprobadas
- **Normas Corporativas Vinculantes** (BCRs)
- **Códigos de conducta** certificados
- **Medidas técnicas y organizativas** complementarias

**Países con nivel adecuado de protección**:
- Listado actualizado según decisiones de autoridades competentes
- Revisión periódica de garantías implementadas

---

## 8. CONSERVACIÓN Y CRITERIOS DE RETENCIÓN

### 8.1 Criterios Generales
- **Necesidad**: mientras sea necesario para las finalidades
- **Base legal**: según obligaciones legales aplicables
- **Consentimiento**: hasta su revocatoria (salvo otras bases legales)

### 8.2 Períodos Específicos

| Categoría de Datos | Período de Retención | Fundamento |
|-------------------|---------------------|------------|
| Datos de cuenta activa | Mientras la cuenta esté activa + 5 años | Obligaciones contractuales y AML |
| Datos KYC/AML | 10 años desde última transacción | Regulaciones financieras |
| Logs de seguridad | 2 años | Investigación de incidentes |
| Datos de marketing | Hasta revocatoria + 1 año | Gestión de opt-outs |
| Cookies técnicas | Sesión o según configuración | Funcionamiento de la plataforma |

### 8.3 Eliminación Segura
- **Borrado físico** de medios de almacenamiento
- **Sobrescritura** de datos sensibles
- **Anonimización** irreversible cuando aplique
- **Certificados de destrucción** para datos críticos

---

## 9. MEDIDAS DE SEGURIDAD

### 9.1 Medidas Técnicas
- **Cifrado en tránsito**: TLS 1.3 para todas las comunicaciones
- **Cifrado en reposo**: AES-256 para almacenamiento de datos
- **Control de acceso**: autenticación multifactor obligatoria
- **Segregación de redes**: ambientes separados por criticidad
- **Monitoreo continuo**: detección de amenazas 24/7

### 9.2 Medidas Organizativas
- **Políticas de seguridad**: documentadas y actualizadas
- **Capacitación del personal**: programa continuo de concientización
- **Gestión de accesos**: principio de menor privilegio
- **Respuesta a incidentes**: plan documentado y probado
- **Auditorías regulares**: internas y externas

### 9.3 Medidas de Pseudonimización
- **Identificadores únicos**: separados de datos identificativos
- **Técnicas criptográficas**: hash con sal para datos sensibles
- **Compartimentación**: acceso limitado a datos completos

### 9.4 Pruebas y Evaluaciones
- **Pruebas de penetración**: semestrales por terceros
- **Evaluaciones de vulnerabilidades**: mensuales automatizadas
- **Revisiones de código**: para todas las implementaciones
- **Simulacros de respuesta**: trimestrales

---

## 10. COOKIES Y TECNOLOGÍAS SIMILARES

### 10.1 Tipos de Cookies

**Cookies estrictamente necesarias**:
- Autenticación de sesión
- Seguridad y prevención de fraude
- Funcionamiento básico de la plataforma
- **Base legal**: interés legítimo

**Cookies de rendimiento**:
- Analítica de uso agregado
- Optimización de rendimiento
- Métricas técnicas
- **Base legal**: consentimiento

**Cookies de funcionalidad**:
- Preferencias de usuario
- Configuraciones personalizadas
- Idioma y localización
- **Base legal**: consentimiento

**Cookies de marketing**:
- Publicidad personalizada
- Seguimiento de conversiones
- Remarketing
- **Base legal**: consentimiento específico

### 10.2 Gestión de Consentimiento
- **Banner informativo** al primer acceso
- **Centro de preferencias** para gestión granular
- **Opciones de retiro** fácilmente accesibles
- **Renovación periódica** del consentimiento

### 10.3 Cookies de Terceros
- Google Analytics (analítica)
- Proveedores de CDN (rendimiento)
- Servicios de chat (soporte)
- Redes sociales (compartir contenido)

---

## 11. MENORES DE EDAD

### 11.1 Política General
**<CompanyName>** no está dirigida a menores de 18 años. No recolectamos conscientemente datos de menores sin consentimiento parental verificable.

### 11.2 Verificación de Edad
- Declaración de mayoría de edad en registro
- Verificación mediante documento de identidad
- Proceso KYC obligatorio para todos los usuarios

### 11.3 Procedimiento ante Detección
Si detectamos datos de menores:
1. **Suspensión inmediata** de la cuenta
2. **Contacto con representantes legales**
3. **Eliminación de datos** si no hay consentimiento válido
4. **Notificación a autoridades** si es requerido

---

## 12. DECISIONES AUTOMATIZADAS Y PERFILES

### 12.1 Alcance de la Automatización
**<CompanyName>** utiliza algoritmos automatizados para:
- **Detección de fraude**: análisis de patrones sospechosos
- **Evaluación de riesgo**: scoring crediticio y AML
- **Recomendaciones de trading**: sugerencias personalizadas
- **Optimización de herramientas**: ajustes automáticos

### 12.2 Lógica y Criterios
- **Modelos de machine learning**: basados en datos históricos
- **Reglas de negocio**: definidas por expertos financieros
- **Factores considerados**: comportamiento, patrones de mercado, perfil de riesgo
- **Actualización continua**: mejora iterativa de algoritmos

### 12.3 Efectos y Consecuencias
- **Aprobación/rechazo** de transacciones
- **Límites de trading** personalizados
- **Alertas de seguridad** automatizadas
- **Recomendaciones de producto** personalizadas

### 12.4 Derechos del Usuario
- **Información sobre la lógica** utilizada
- **Explicación de decisiones** específicas
- **Intervención humana** cuando sea solicitada
- **Impugnación de decisiones** automatizadas
- **Revisión manual** de casos complejos

---

## 13. ACTUALIZACIONES DE LA POLÍTICA

### 13.1 Notificación de Cambios
- **Cambios materiales**: notificación por correo electrónico con 30 días de anticipación
- **Cambios menores**: actualización en el sitio web con aviso destacado
- **Cambios legales**: implementación inmediata con notificación posterior

### 13.2 Versiones y Vigencia
- **Control de versiones**: identificación clara de cada versión
- **Fecha de vigencia**: especificada en cada actualización
- **Archivo histórico**: mantenimiento de versiones anteriores
- **Consentimiento renovado**: cuando sea requerido por cambios sustanciales

### 13.3 Canales de Comunicación
- Correo electrónico registrado
- Notificación en la plataforma
- Publicación en sitio web
- Redes sociales oficiales (para cambios importantes)

---

## 14. CONTACTO Y DELEGADO DE PROTECCIÓN DE DATOS

### 14.1 Información de Contacto
**Responsable del Tratamiento**:
**<CompanyName>**
Dirección: **<ContactAddress>**
Correo electrónico: **<ContactEmail>**
Teléfono: [Número de contacto]

**Delegado de Protección de Datos (DPO)**:
Correo electrónico: **<DPOEmail>**
Horario de atención: Lunes a viernes, 9:00 AM - 6:00 PM (horario local)

### 14.2 Consultas y Solicitudes
Para ejercer sus derechos o realizar consultas sobre esta Política, puede contactarnos a través de los canales mencionados. Nos comprometemos a responder de manera oportuna y completa.

### 14.3 Autoridades de Control
- **Colombia**: Superintendencia de Industria y Comercio (SIC)
- **España**: Agencia Española de Protección de Datos (AEPD)
- **Otros países UE**: Autoridad local de protección de datos
- **Otros países LATAM**: Autoridad competente según jurisdicción

---

**Fecha de última actualización**: 20 de diciembre de 2024
**Versión**: v2024.12.20

Esta Política forma parte integral de nuestros Términos y Condiciones de Uso. Al utilizar **<ProductName>**, usted acepta el tratamiento de sus datos personales conforme a esta Política.`,

      volatilityText: `# DISCLAIMER DE RIESGOS DE VOLATILIDAD

**<CompanyName>** - **<ProductName>** - Versión v2024.12.20

---

## ADVERTENCIA IMPORTANTE

**EL TRADING DE CRIPTOMONEDAS Y ACTIVOS FINANCIEROS IMPLICA RIESGOS SIGNIFICATIVOS. PUEDE PERDER PARTE O LA TOTALIDAD DE SU INVERSIÓN. NO INVIERTA MÁS DE LO QUE PUEDE PERMITIRSE PERDER.**

---

## 1. NATURALEZA DEL PRODUCTO Y SERVICIO

### 1.1 No es Asesoría Financiera
**<CompanyName>** proporciona herramientas tecnológicas automatizadas para trading, pero **NO**:
- Ofrece asesoría financiera personalizada
- Garantiza resultados de inversión
- Actúa como intermediario financiero regulado
- Proporciona recomendaciones de inversión específicas

### 1.2 Herramientas Automatizadas
Nuestros servicios consisten en:
- Algoritmos de trading automatizado
- Señales técnicas basadas en análisis de mercado
- Herramientas de gestión de riesgo
- Interfaces para configuración de estrategias

**IMPORTANTE**: Las herramientas son facilitadores tecnológicos. Las decisiones de inversión son exclusivamente suyas.

### 1.3 Responsabilidad del Usuario
Usted es completamente responsable de:
- Evaluar su situación financiera personal
- Determinar la idoneidad de nuestros servicios
- Configurar parámetros de riesgo apropiados
- Monitorear sus inversiones activamente
- Cumplir obligaciones fiscales aplicables

---

## 2. RIESGOS DE MERCADO

### 2.1 Volatilidad Extrema
Los criptoactivos experimentan:
- **Fluctuaciones de precio severas**: variaciones de 20-50% en períodos cortos
- **Movimientos impredecibles**: sin relación con fundamentos económicos
- **Cascadas de liquidación**: ventas masivas que amplifican caídas
- **Manipulación de mercado**: por actores con grandes posiciones

### 2.2 Gaps y Discontinuidades
- **Gaps de precio**: saltos bruscos sin transacciones intermedias
- **Mercados ilíquidos**: especialmente en fines de semana y feriados
- **Suspensiones de trading**: por decisiones de exchanges
- **Horarios limitados**: algunos mercados tradicionales

### 2.3 Alta Correlación en Crisis
Durante eventos de estrés:
- **Correlación aumentada**: todos los activos caen simultáneamente
- **Diversificación reducida**: estrategias de cobertura fallan
- **Liquidez escasa**: dificultad para ejecutar órdenes
- **Contagio entre mercados**: crisis se extienden globalmente

### 2.4 Shocks Macroeconómicos
Eventos que impactan todos los mercados:
- Decisiones de bancos centrales
- Crisis geopolíticas y conflictos
- Pandemias y desastres naturales
- Cambios regulatorios abruptos
- Colapsos de instituciones financieras

---

## 3. RIESGOS DE LIQUIDEZ Y EJECUCIÓN

### 3.1 Spreads y Costos de Transacción
- **Spreads amplios**: diferencia entre precio de compra y venta
- **Slippage**: ejecución a precios peores que los esperados
- **Comisiones acumulativas**: que reducen rendimientos netos
- **Costos ocultos**: en conversiones de moneda y transferencias

### 3.2 Profundidad de Mercado Limitada
- **Órdenes grandes**: impactan significativamente los precios
- **Mercados fragmentados**: liquidez distribuida en múltiples venues
- **Horarios de baja actividad**: liquidez reducida fuera de horas principales
- **Activos menos populares**: liquidez extremadamente limitada

### 3.3 Latencia y Problemas Técnicos
- **Retrasos en ejecución**: por congestión de red o sistemas
- **Desconexiones de API**: interrupciones en conexiones con exchanges
- **Fallas de infraestructura**: problemas en exchanges o proveedores
- **Ataques cibernéticos**: que afectan disponibilidad de servicios

### 3.4 Riesgo de Contraparte
- **Insolvencia de exchanges**: pérdida de fondos depositados
- **Congelamiento de cuentas**: por decisiones unilaterales
- **Cambios en términos**: modificaciones desfavorables de condiciones
- **Disputas legales**: que afecten operaciones del exchange

---

## 4. RIESGOS TECNOLÓGICOS

### 4.1 Errores de Software y APIs
- **Bugs en algoritmos**: que generen órdenes incorrectas
- **Fallas de conectividad**: interrupciones en APIs de trading
- **Datos erróneos**: precios o información de mercado incorrecta
- **Actualizaciones problemáticas**: que introduzcan nuevos errores

### 4.2 Riesgos de Smart Contracts y DeFi
- **Vulnerabilidades de código**: explotables por atacantes
- **Riesgos de oráculos**: manipulación de fuentes de datos externas
- **Governance attacks**: cambios maliciosos en protocolos
- **Composabilidad**: riesgos cascada en protocolos interconectados

### 4.3 Riesgos de Bridges y Cross-Chain
- **Vulnerabilidades de puentes**: entre diferentes blockchains
- **Ataques de validadores**: en redes de consenso
- **Finality risks**: reorganizaciones de blockchain
- **Censura de transacciones**: por validadores maliciosos

### 4.4 Custodia y Claves Privadas
- **Pérdida de claves**: acceso permanentemente perdido
- **Compromiso de wallets**: por malware o phishing
- **Errores de usuario**: transferencias a direcciones incorrectas
- **Custodios centralizados**: riesgos de terceros

### 4.5 Ciberseguridad
- **Ataques de phishing**: suplantación de identidad
- **Malware especializado**: robo de credenciales y fondos
- **Ataques de ingeniería social**: manipulación psicológica
- **Compromisos de dispositivos**: acceso no autorizado

---

## 5. RIESGO REGULATORIO Y TRIBUTARIO

### 5.1 Cambios Normativos
- **Prohibiciones súbitas**: de trading o tenencia de criptoactivos
- **Nuevos impuestos**: aplicables retroactivamente
- **Requisitos de licencias**: para operadores y usuarios
- **Restricciones geográficas**: limitaciones por jurisdicción

### 5.2 Incertidumbre Legal
- **Marco regulatorio evolutivo**: reglas en constante cambio
- **Interpretaciones divergentes**: entre diferentes autoridades
- **Precedentes judiciales**: que modifiquen entendimientos previos
- **Coordinación internacional**: falta de estándares globales

### 5.3 Obligaciones Fiscales
- **Responsabilidad del usuario**: por cumplimiento tributario
- **Cálculo complejo**: de ganancias y pérdidas
- **Documentación requerida**: registros detallados de transacciones
- **Auditorías fiscales**: escrutinio aumentado por autoridades

### 5.4 Restricciones Territoriales
- **Listas de sanciones**: países o individuos prohibidos
- **Restricciones de residencia**: limitaciones por ubicación
- **Cambios geopolíticos**: que afecten accesibilidad de servicios
- **Bloqueos de Internet**: que impidan acceso a plataformas

---

## 6. DATOS, SEÑALES Y BACKTESTING

### 6.1 Limitaciones de Datos Históricos
- **Calidad variable**: errores en datos de fuentes externas
- **Períodos limitados**: historial insuficiente para algunos activos
- **Survivorship bias**: solo datos de activos que "sobrevivieron"
- **Look-ahead bias**: uso inadvertido de información futura

### 6.2 Retrasos y Disponibilidad
- **Latencia de datos**: retrasos en información de mercado
- **Interrupciones de feeds**: fallas en proveedores de datos
- **Datos faltantes**: gaps en información histórica
- **Revisiones posteriores**: correcciones que afectan análisis

### 6.3 Sesgos en Backtesting
- **Overfitting**: optimización excesiva para datos históricos
- **Selection bias**: cherry-picking de períodos favorables
- **Transaction costs**: no considerados adecuadamente
- **Market impact**: no modelado en simulaciones

### 6.4 Performance Pasada ≠ Resultados Futuros
**ADVERTENCIA CRÍTICA**: Los resultados históricos NO garantizan rendimientos futuros:
- Condiciones de mercado cambian constantemente
- Estrategias exitosas pueden dejar de funcionar
- Competencia reduce efectividad de señales
- Eventos únicos no se repiten exactamente

---

## 7. AUTOMATIZACIÓN Y AUTO-TRADING

### 7.1 Ejecuciones Parciales y Rechazos
- **Órdenes parcialmente ejecutadas**: por liquidez insuficiente
- **Rechazos de exchange**: por múltiples razones técnicas
- **Timeouts de conexión**: órdenes no procesadas
- **Límites de posición**: restricciones de riesgo activadas

### 7.2 Configuración es Responsabilidad del Usuario
- **Parámetros de riesgo**: stop-loss, take-profit, tamaño de posición
- **Límites de exposición**: máximo capital en riesgo
- **Horarios de operación**: cuándo activar/desactivar algoritmos
- **Selección de activos**: qué criptomonedas tradear

### 7.3 Monitoreo Continuo Requerido
**NO ES "SET AND FORGET"**:
- Supervisión regular de posiciones abiertas
- Ajuste de parámetros según condiciones de mercado
- Intervención manual cuando sea necesario
- Desactivación durante eventos de alto riesgo

### 7.4 Riesgos de Algoritmos Descontrolados
- **Bucles infinitos**: órdenes repetitivas por errores lógicos
- **Escalada de posiciones**: incremento descontrolado de exposición
- **Correlaciones no detectadas**: concentración de riesgo inadvertida
- **Flash crashes**: contribución a caídas súbitas de mercado

---

## 8. RESPONSABILIDAD DEL USUARIO

### 8.1 Evaluación de Idoneidad Personal
Antes de usar nuestros servicios, evalúe:
- **Situación financiera**: ingresos, gastos, ahorros, deudas
- **Experiencia en trading**: conocimiento de mercados financieros
- **Tolerancia al riesgo**: capacidad emocional para pérdidas
- **Objetivos de inversión**: plazos y expectativas realistas
- **Tiempo disponible**: para monitorear inversiones

### 8.2 Conocimiento del Producto
Debe comprender completamente:
- Funcionamiento de algoritmos de trading
- Riesgos específicos de cada herramienta
- Configuraciones y parámetros disponibles
- Costos y comisiones aplicables
- Procedimientos de soporte y escalamiento

### 8.3 Gestión de Riesgo Personal
- **Diversificación**: no concentrar en un solo activo o estrategia
- **Límites de pérdida**: definir máximo aceptable por operación/día/mes
- **Capital de riesgo**: usar solo dinero que puede permitirse perder
- **Revisión periódica**: evaluar performance y ajustar estrategias

### 8.4 Cumplimiento Legal
- **Regulaciones locales**: cumplir leyes de su jurisdicción
- **Obligaciones fiscales**: declarar ganancias según corresponda
- **Restricciones de edad**: ser mayor de edad legal
- **Prohibiciones aplicables**: no usar si está legalmente impedido

---

## 9. LIMITACIÓN DE RESPONSABILIDAD

### 9.1 Alcance de Nuestros Servicios
**<CompanyName>** proporciona únicamente:
- Herramientas tecnológicas de trading
- Interfaces de usuario para configuración
- Conectividad con exchanges y proveedores de datos
- Soporte técnico para uso de la plataforma

### 9.2 Exclusiones de Responsabilidad
**NO somos responsables por**:
- Pérdidas financieras derivadas del trading
- Decisiones de inversión del usuario
- Fallas o interrupciones de terceros (exchanges, proveedores)
- Cambios regulatorios o fiscales
- Eventos de fuerza mayor

### 9.3 Limitaciones Legales
Nuestra responsabilidad está limitada por:
- **Monto máximo**: valor de las comisiones pagadas por el usuario
- **Tipo de daños**: solo daños directos, no consecuenciales
- **Plazo de reclamación**: según términos y condiciones
- **Jurisdicción aplicable**: según contratos de servicio

### 9.4 Compatibilidad con Normativa de Consumo
Estas limitaciones no afectan:
- Derechos irrenunciables bajo leyes de consumo
- Responsabilidad por dolo o culpa grave
- Garantías legales mínimas aplicables
- Derechos de protección de datos personales

---

## 10. CONFIRMACIÓN EXPRESA DEL USUARIO

Al continuar con el uso de **<ProductName>**, usted declara y confirma expresamente que:

### 10.1 Comprensión Completa
- **He leído íntegramente** este Disclaimer de Riesgos
- **Comprendo todos los riesgos** descritos en este documento
- **Entiendo que puedo perder** parte o la totalidad de mi inversión
- **Acepto que los resultados pasados** no garantizan resultados futuros

### 10.2 Capacidad y Idoneidad
- **Tengo la mayoría de edad** legal en mi jurisdicción
- **Poseo experiencia suficiente** en trading e inversiones
- **He evaluado mi situación financiera** y tolerancia al riesgo
- **Dispongo de capital de riesgo** que puedo permitirme perder

### 10.3 Decisión Informada
- **Tomo esta decisión libremente** sin coerción
- **No me baso únicamente** en información proporcionada por <CompanyName>
- **He consultado asesores independientes** cuando lo considero necesario
- **Asumo plena responsabilidad** por mis decisiones de inversión

### 10.4 Aceptación de Términos
- **Acepto todas las limitaciones** de responsabilidad descritas
- **Reconozco el carácter experimental** de las tecnologías blockchain
- **Entiendo que no hay garantías** de disponibilidad o rendimiento
- **Acepto los riesgos inherentes** al trading automatizado

---

## 11. ACTUALIZACIONES Y VIGENCIA

### 11.1 Modificaciones
Este Disclaimer puede ser actualizado para reflejar:
- Nuevos riesgos identificados
- Cambios en productos o servicios
- Modificaciones regulatorias
- Mejores prácticas de la industria

### 11.2 Notificación
- **Cambios materiales**: notificación con 30 días de anticipación
- **Cambios menores**: publicación en plataforma con aviso
- **Cambios urgentes**: implementación inmediata por razones de seguridad

### 11.3 Aceptación Continua
El uso continuado de nuestros servicios después de modificaciones constituye aceptación de los nuevos términos.

---

**ADVERTENCIA FINAL**: EL TRADING DE CRIPTOMONEDAS ES ALTAMENTE ESPECULATIVO Y CONLLEVA RIESGOS SUSTANCIALES. SOLO INVIERTA LO QUE PUEDE PERMITIRSE PERDER COMPLETAMENTE.

**Fecha de última actualización**: 20 de diciembre de 2024
**Versión**: v2024.12.20

Al hacer clic en "Acepto los riesgos de volatilidad", usted confirma que ha leído, comprendido y aceptado todos los riesgos descritos en este documento.`,

      fundsOriginText: `# DECLARACIÓN DE ORIGEN DE FONDOS

**<CompanyName>** - **<ProductName>** - Versión v2024.12.20

---

## DECLARACIÓN BAJO JURAMENTO

Al utilizar los servicios de **<CompanyName>**, yo, como usuario de la plataforma, declaro bajo la gravedad del juramento y las penas establecidas por la ley:

---

## 1. ORIGEN LÍCITO DE FONDOS

### 1.1 Declaración Principal
**DECLARO EXPRESAMENTE** que todos los fondos, criptoactivos, dinero en efectivo y demás recursos económicos que utilizo o utilizaré en **<ProductName>**:

- **Provienen exclusivamente de actividades lícitas** y legalmente reconocidas
- **NO están relacionados** con lavado de activos, lavado de dinero o legitimación de capitales
- **NO proceden** de financiación del terrorismo o actividades terroristas
- **NO tienen origen** en tráfico de drogas, armas, personas o cualquier actividad ilícita
- **NO están vinculados** a corrupción, soborno, extorsión o enriquecimiento ilícito
- **NO provienen** de evasión fiscal, fraude tributario o delitos contra la administración pública

### 1.2 Fuentes Legítimas
Mis fondos provienen de una o más de las siguientes fuentes lícitas:
- Ingresos por trabajo dependiente o independiente
- Utilidades de actividades comerciales legales
- Rendimientos de inversiones legítimas
- Herencias o donaciones debidamente documentadas
- Ahorros acumulados de ingresos lícitos
- Ventas de bienes adquiridos legalmente
- Otras fuentes lícitas que puedo documentar apropiadamente

### 1.3 Capacidad Económica
- **Mis ingresos y patrimonio** son consistentes con los montos que manejo en la plataforma
- **Puedo justificar** el origen de mis recursos mediante documentación apropiada
- **No utilizo fondos** que excedan mi capacidad económica demostrable
- **Mantengo registros** que respaldan la licitud de mis transacciones

---

## 2. COMPROMISOS DEL USUARIO

### 2.1 Documentación y Verificación
Me comprometo a:
- **Proporcionar documentación veraz** cuando sea solicitada por <CompanyName>
- **Mantener actualizados** mis datos personales y financieros
- **Colaborar completamente** en procesos de verificación KYC/AML
- **Aportar evidencia adicional** del origen de fondos cuando sea requerido
- **Responder de manera oportuna** a solicitudes de información

### 2.2 Uso Legítimo de la Plataforma
Me comprometo a:
- **Utilizar los servicios exclusivamente** para fines legítimos de trading e inversión
- **NO usar la plataforma** para ocultar, transferir o legitimar fondos de origen ilícito
- **NO realizar operaciones** diseñadas para evadir controles AML/KYC
- **NO facilitar actividades** de terceros que puedan ser ilícitas
- **Cumplir todas las regulaciones** aplicables en mi jurisdicción

### 2.3 Actualización de Información
Me comprometo a:
- **Informar inmediatamente** cualquier cambio en mi situación que pueda afectar el origen de fondos
- **Notificar cambios** en mi actividad económica principal
- **Actualizar documentación** cuando sea necesario
- **Reportar sospechas** de uso indebido de mi cuenta

---

## 3. PERSONAS EXPUESTAS POLÍTICAMENTE (PEP)

### 3.1 Declaración PEP
**DECLARO** que:
- [ ] **NO soy** una Persona Expuesta Políticamente (PEP)
- [ ] **SÍ soy** una Persona Expuesta Políticamente (PEP)
- [ ] **SÍ soy** familiar cercano o asociado conocido de una PEP

### 3.2 Definición de PEP
Entiendo que son PEP las personas que desempeñan o han desempeñado funciones públicas prominentes, incluyendo:
- Jefes de Estado o de Gobierno, ministros y viceministros
- Miembros del parlamento o de órganos legislativos similares
- Miembros de tribunales supremos, tribunales constitucionales u otros altos tribunales
- Miembros de tribunales de cuentas o de juntas directivas de bancos centrales
- Embajadores, encargados de negocios y oficiales de alto rango de las fuerzas armadas
- Miembros de órganos de administración, dirección o supervisión de empresas públicas

### 3.3 Obligaciones Adicionales para PEP
Si soy PEP, me comprometo a:
- **Proporcionar información adicional** sobre fuentes de riqueza y fondos
- **Someterse a controles reforzados** de debida diligencia
- **Obtener aprobación de alta gerencia** para establecer relaciones comerciales
- **Aceptar monitoreo continuo** de transacciones

---

## 4. LISTAS DE SANCIONES

### 4.1 Declaración sobre Sanciones
**DECLARO** que:
- **NO aparezco** en listas de sanciones de OFAC (Estados Unidos)
- **NO estoy incluido** en listas de sanciones de la Unión Europea
- **NO figuro** en listas de sanciones de Naciones Unidas
- **NO estoy sujeto** a sanciones de otras autoridades competentes
- **NO tengo** restricciones legales para realizar transacciones internacionales

### 4.2 Monitoreo Continuo
Autorizo a **<CompanyName>** a:
- **Verificar periódicamente** mi estatus en listas de sanciones
- **Suspender servicios** inmediatamente si aparezco en alguna lista
- **Reportar a autoridades** si es requerido por regulaciones
- **Congelar fondos** si es ordenado por autoridades competentes

### 4.3 Cambios en Estatus
Me comprometo a **informar inmediatamente** si:
- Soy incluido en cualquier lista de sanciones
- Soy objeto de investigaciones por autoridades financieras
- Enfrento procedimientos legales relacionados con AML/KYC
- Mi situación legal cambia de manera relevante

---

## 5. MEDIDAS DE LA PLATAFORMA

### 5.1 Derechos de <CompanyName>
**<CompanyName>** se reserva el derecho de:
- **Solicitar documentación adicional** en cualquier momento
- **Realizar verificaciones** con fuentes externas autorizadas
- **Suspender temporalmente** servicios durante investigaciones
- **Terminar la relación comercial** si no se cumplen estándares AML/KYC
- **Reportar transacciones sospechosas** a autoridades competentes

### 5.2 Procedimientos de Verificación
**<CompanyName>** puede implementar:
- **Verificación de identidad** mediante documentos oficiales
- **Validación de direcciones** y información de contacto
- **Screening en listas** de sanciones y PEP
- **Análisis de transacciones** para detectar patrones sospechosos
- **Revisiones periódicas** de información del cliente

### 5.3 Medidas de Mitigación
En caso de detectar riesgos elevados:
- **Debida diligencia reforzada** con documentación adicional
- **Límites de transacción** reducidos o específicos
- **Monitoreo continuo** de actividades
- **Aprobaciones manuales** para transacciones significativas
- **Revisiones más frecuentes** de información

---

## 6. USO TERRITORIAL Y CUMPLIMIENTO

### 6.1 Jurisdicciones de Operación
Esta declaración aplica para usuarios en:
- **Colombia**: conforme a regulaciones UIAF y normativa AML/KYC local
- **Latinoamérica**: según regulaciones financieras de cada país
- **Unión Europea**: conforme a Directivas AML y regulaciones locales
- **Otras jurisdicciones**: según marcos regulatorios aplicables

### 6.2 Cooperación con Autoridades
Me comprometo a:
- **Cooperar completamente** con investigaciones de autoridades competentes
- **Proporcionar información** cuando sea requerida por ley
- **Permitir acceso** a registros y documentación relevante
- **Cumplir órdenes** de congelamiento o incautación cuando sean legalmente válidas

### 6.3 Cumplimiento Normativo Local
- **Conozco y cumplo** las regulaciones AML/KYC de mi jurisdicción
- **Mantengo al día** mis obligaciones fiscales y regulatorias
- **No violo** restricciones territoriales o sanciones aplicables
- **Respeto** prohibiciones locales sobre criptoactivos cuando existan

---

## 7. AUTORIZACIÓN PARA VERIFICACIONES

### 7.1 Consentimiento Expreso
**AUTORIZO EXPRESAMENTE** a **<CompanyName>** a:
- **Realizar consultas** en centrales de riesgo y bases de datos financieras
- **Verificar información** con entidades gubernamentales cuando sea permitido
- **Solicitar referencias** comerciales y bancarias
- **Acceder a información pública** relevante para verificación
- **Compartir información** con autoridades cuando sea requerido por ley

### 7.2 Procesamiento de Datos
Entiendo y acepto que **<CompanyName>**:
- **Procesará mis datos** conforme a su Política de Privacidad
- **Conservará registros** por los períodos requeridos por ley
- **Implementará medidas** de seguridad para proteger información
- **Podrá transferir datos** a jurisdicciones con protección adecuada

### 7.3 Retención de Información
Autorizo la conservación de:
- **Documentos de identificación** y verificación
- **Registros de transacciones** y comunicaciones
- **Resultados de verificaciones** y due diligence
- **Reportes de actividad sospechosa** cuando aplique

---

## 8. REGISTRO DE ACEPTACIÓN

### 8.1 Información de la Declaración
- **Fecha y hora de aceptación**: [Generada automáticamente]
- **Dirección IP**: [Registrada automáticamente]
- **User Agent**: [Registrado automáticamente]
- **Versión del documento**: v2024.12.20
- **Idioma**: Español (ES)
- **Flujo de origen**: [signup/whitelist]

### 8.2 Validez Legal
Esta declaración constituye:
- **Documento legal vinculante** entre el usuario y <CompanyName>
- **Evidencia de cumplimiento** con requisitos AML/KYC
- **Base para relación comercial** en servicios financieros
- **Compromiso formal** con estándares de integridad

### 8.3 Conservación de Registros
**<CompanyName>** mantendrá:
- **Registro permanente** de esta declaración
- **Evidencia de aceptación** con metadatos técnicos
- **Historial de actualizaciones** cuando aplique
- **Documentación de soporte** proporcionada por el usuario

---

## 9. CONSECUENCIAS DEL INCUMPLIMIENTO

### 9.1 Medidas Inmediatas
El incumplimiento de esta declaración puede resultar en:
- **Suspensión inmediata** de servicios
- **Congelamiento de fondos** hasta completar investigación
- **Terminación de la relación** comercial
- **Reporte a autoridades** competentes

### 9.2 Responsabilidades Legales
El usuario será responsable por:
- **Daños y perjuicios** causados por información falsa
- **Costos legales** derivados de investigaciones
- **Sanciones regulatorias** aplicables
- **Consecuencias penales** por delitos relacionados

### 9.3 Cooperación en Investigaciones
En caso de investigaciones:
- **Colaboración obligatoria** con autoridades
- **Acceso completo** a información y documentos
- **Disponibilidad** para declaraciones y testimonios
- **Cumplimiento** de medidas cautelares ordenadas

---

## 10. CONFIRMACIÓN FINAL

Al hacer clic en "**Aceptar declaración de origen de fondos**", confirmo que:

### 10.1 Declaración Veraz
- **He proporcionado información completamente veraz** en esta declaración
- **Entiendo las consecuencias legales** de proporcionar información falsa
- **Asumo plena responsabilidad** por la exactitud de mis declaraciones
- **Me comprometo a actualizar** información cuando sea necesario

### 10.2 Comprensión de Obligaciones
- **Comprendo mis obligaciones** bajo regulaciones AML/KYC
- **Acepto procedimientos de verificación** que puedan ser requeridos
- **Entiendo que el incumplimiento** puede resultar en terminación de servicios
- **Reconozco el derecho** de <CompanyName> a reportar actividades sospechosas

### 10.3 Consentimiento Informado
- **Otorgo mi consentimiento libre e informado** para esta declaración
- **No he sido coaccionado** para realizar esta declaración
- **He tenido oportunidad** de consultar asesores legales si lo consideré necesario
- **Acepto que esta declaración** es legalmente vinculante

---

**ADVERTENCIA LEGAL**: La provisión de información falsa en esta declaración constituye un delito grave que puede resultar en sanciones penales, civiles y administrativas. Las autoridades competentes pueden iniciar investigaciones y procedimientos legales contra quienes proporcionen información fraudulenta.

**Fecha de última actualización**: 20 de diciembre de 2024
**Versión**: v2024.12.20

**AL CONTINUAR, DECLARO BAJO JURAMENTO QUE TODA LA INFORMACIÓN PROPORCIONADA ES VERAZ Y COMPLETA.**`
    },
    form: {
      checkbox: {
        dataPolicy: "Acepto la política de tratamiento de datos",
        volatility: "Acepto el disclaimer de riesgos de volatilidad y reconozco que soy responsable de mis decisiones de uso",
        fundsOrigin: "Declaro que el origen de mis fondos es lícito y no procede de actividades ilegales"
      },
      submitDisabledHint: "Debes completar los campos requeridos y aceptar las tres políticas para continuar"
    },
    // Mantener compatibilidad con código existente
      privacy: "Política de Tratamiento de Datos",
      disclaimer: "Disclaimer de Riesgos de Volatilidad",
      fundOrigin: "Declaración de Origen de Fondos",
      acceptPrivacy: "Acepto la Política de Tratamiento de Datos",
      acceptDisclaimer: "Acepto el Disclaimer de Riesgos de Volatilidad y reconozco que soy responsable de mis decisiones de uso",
      acceptFundOrigin: "Acepto y declaro el origen lícito de mis fondos",
      scrollRequired: "Debe leer completamente el documento para continuar",
      accept: "Aceptar términos",
    continueReading: "Continuar leyendo",
    acceptDataPolicy: "Aceptar política de tratamiento de datos",
    acceptRiskDisclaimer: "Aceptar los riesgos de volatilidad",
      privacyText: "De conformidad con la Ley 1581 de 2012 de Colombia y las normativas de protección de datos en Latinoamérica, ORA IA informa que los datos personales recolectados serán tratados con fines de: (i) gestión contractual, (ii) provisión de servicios tecnológicos, (iii) comunicaciones comerciales, (iv) cumplimiento de obligaciones legales y regulatorias. El titular tiene derecho a conocer, actualizar, rectificar y suprimir sus datos, así como a revocar la autorización otorgada. ORA IA implementa medidas técnicas y administrativas para proteger la confidencialidad e integridad de la información. Los datos podrán ser transferidos a terceros países que cuenten con niveles adecuados de protección o mediante acuerdos contractuales que aseguren las garantías apropiadas. Para ejercer sus derechos puede escribir a support@oraglobal.co.",
      disclaimerText: "El uso de herramientas tecnológicas automatizadas aplicadas a criptomonedas y acciones implica alta volatilidad. Puede presentarse pérdida parcial o total de los criptoactivos. Las referencias de desempeño mencionadas son datos históricos y no constituyen garantía. ORA IA no asume responsabilidad por resultados derivados de decisiones de uso. Al continuar, usted reconoce que la responsabilidad de sus decisiones es exclusivamente suya.",
      fundOriginText: "Declaro bajo la gravedad de juramento que los criptoactivos utilizados con las herramientas ORA IA provienen de actividades lícitas, no están relacionados con lavado de activos, financiación del terrorismo o delitos similares. Autorizo a ORA IA a realizar verificaciones de cumplimiento normativo (KYC/AML) en cualquier momento."
    },
    deposits: {
      note: "Criptoactivos soportados: USDT en POL o TRX; USDC en POL o ETH.",
      strict: "Solo se soportan USDT (POL/TRX) o USDC (POL/ETH). Otros tokens o redes no son compatibles.",
      selectAsset: "Seleccionar criptoactivo",
      selectNetwork: "Seleccionar red",
      warning: "Solo se soportan USDT (POL/TRX) o USDC (POL/ETH). Envíos en redes/activos no compatibles pueden resultar en pérdida de criptoactivos."
    },
    whitelist: {
      success: "¡FELICIDADES! Estás en la Whitelisting de ORA IA",
      emailBody: "Bienvenido a ORA IA. Has dado un paso hacia el futuro del trading automatizado. Nuestra IA de vanguardia y la experiencia de nuestros fundadores trabajan para optimizar tu experiencia con procesos claros y enfoque en análisis de volatilidad. Próximamente recibirás acceso prioritario, insights exclusivos y oportunidades anticipadas. ¡El futuro del trading tecnológico ya es tuyo!",
      accessPanel: "Accede a tu panel exclusivo",
      formLabels: {
        fullName: "Nombre completo *",
        email: "Email *",
        phone: "Teléfono (opcional)",
        country: "País *"
      },
      depositsInfo: "Información de Depósitos",
      readFullText: "Leer texto completo",
      emailSentTo: "Email enviado a:",
      priorityAccess: "Acceso prioritario a productos exclusivos de ORA IA"
    },
    about: {
      title: "Quiénes Somos",
      description: "Experiencia de fundadores y análisis de volatilidad profesional"
    },
    howItWorks: {
      title: "Cómo Funciona",
      step1: "Registro Seguro",
      step2: "Configura Herramientas",
      step3: "Monitoreo Real"
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Nuestra visión para transformar las herramientas cripto automatizadas con IA",
      status: {
        completed: "Completado",
        inProgress: "En Progreso",
        planned: "Planificado"
      },
      regulatoryNote: {
        title: "Nota Regulatoria",
        content: "Los hitos que involucran licenciamiento y cumplimiento regulatorio están sujetos a aprobaciones de autoridades competentes y pueden experimentar cambios en las fechas."
      },
      q4_2025: "Q4 2025 - Lanzamiento",
      q1_2026: "Q1 2026 - Ampliación",
      q2_2026: "Q2 2026 - Expansión",
      q3_2026: "Q3 2026 - IA Avanzada",
      q4_2026: "Q4 2026 - Institucional"
    },
    footer: {
      rights: "ORA IA — Asistente de Inteligencia ORA. Todos los derechos reservados.",
      labels: {
        contact: "Contacto",
        legal: "Legal",
        support: "Soporte",
        ceo: "CEO",
        cfo: "CFO",
        termsOfService: "Términos de Servicio"
      },
      techNote: "Sitio web desarrollado con tecnología premium. Todos los derechos reservados."
    },
    common: {
      or: "o",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      accept: "Aceptar",
      cancel: "Cancelar",
      close: "Cerrar",
      continue: "Continuar",
      back: "Volver",
      next: "Siguiente",
      finish: "Finalizar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      view: "Ver",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      export: "Exportar",
      import: "Importar",
      download: "Descargar",
      upload: "Subir",
      share: "Compartir",
      copy: "Copiar",
      paste: "Pegar",
      cut: "Cortar",
      undo: "Deshacer",
      redo: "Rehacer",
      select: "Seleccionar",
      selectAll: "Seleccionar todo",
      clear: "Limpiar",
      reset: "Restablecer",
      refresh: "Actualizar",
      reload: "Recargar",
      print: "Imprimir",
      help: "Ayuda",
      about: "Acerca de",
      settings: "Configuración",
      profile: "Perfil",
      account: "Cuenta",
      logout: "Cerrar sesión",
      login: "Iniciar sesión",
      register: "Registrarse",
      forgotPassword: "¿Olvidaste tu contraseña?",
      resetPassword: "Restablecer contraseña",
      changePassword: "Cambiar contraseña",
      confirmPassword: "Confirmar contraseña",
      newPassword: "Nueva contraseña",
      currentPassword: "Contraseña actual",
      email: "Correo electrónico",
      password: "Contraseña",
      username: "Nombre de usuario",
      firstName: "Nombre",
      lastName: "Apellido",
      fullName: "Nombre completo",
      phone: "Teléfono",
      address: "Dirección",
      city: "Ciudad",
      state: "Estado/Provincia",
      country: "País",
      zipCode: "Código postal",
      dateOfBirth: "Fecha de nacimiento",
      gender: "Género",
      language: "Idioma",
      currency: "Moneda",
      timezone: "Zona horaria",
      notifications: "Notificaciones",
      privacy: "Privacidad",
      security: "Seguridad",
      terms: "Términos",
      conditions: "Condiciones",
      policy: "Política",
      disclaimer: "Descargo de responsabilidad",
      copyright: "Derechos de autor",
      trademark: "Marca registrada",
      patent: "Patente",
      license: "Licencia",
      version: "Versión",
      build: "Compilación",
      release: "Lanzamiento",
      update: "Actualización",
      upgrade: "Actualizar",
      downgrade: "Degradar",
      install: "Instalar",
      uninstall: "Desinstalar",
      enable: "Habilitar",
      disable: "Deshabilitar",
      activate: "Activar",
      deactivate: "Desactivar",
      connect: "Conectar",
      disconnect: "Desconectar",
      online: "En línea",
      offline: "Fuera de línea",
      available: "Disponible",
      unavailable: "No disponible",
      active: "Activo",
      inactive: "Inactivo",
      enabled: "Habilitado",
      disabled: "Deshabilitado",
      public: "Público",
      private: "Privado",
      visible: "Visible",
      hidden: "Oculto",
      open: "Abierto",
      closed: "Cerrado",
      locked: "Bloqueado",
      unlocked: "Desbloqueado",
      secure: "Seguro",
      insecure: "Inseguro",
      encrypted: "Cifrado",
      decrypted: "Descifrado",
      compressed: "Comprimido",
      uncompressed: "Sin comprimir",
      archived: "Archivado",
      unarchived: "Desarchivado",
      published: "Publicado",
      unpublished: "No publicado",
      draft: "Borrador",
      final: "Final",
      approved: "Aprobado",
      rejected: "Rechazado",
      pending: "Pendiente",
      completed: "Completado",
      failed: "Fallido",
      cancelled: "Cancelado",
      expired: "Expirado",
      valid: "Válido",
      invalid: "Inválido",
      required: "Requerido",
      optional: "Opcional",
      recommended: "Recomendado",
      deprecated: "Obsoleto",
      new: "Nuevo",
      old: "Antiguo",
      latest: "Último",
      previous: "Anterior",
      first: "Primero",
      last: "Último",
      all: "Todo",
      none: "Ninguno",
      some: "Algunos",
      many: "Muchos",
      few: "Pocos",
      several: "Varios",
      multiple: "Múltiple",
      single: "Único",
      double: "Doble",
      triple: "Triple",
      half: "Medio",
      quarter: "Cuarto",
      third: "Tercio",
      percent: "Porcentaje",
      percentage: "Porcentaje",
      ratio: "Ratio",
      rate: "Tasa",
      frequency: "Frecuencia",
      duration: "Duración",
      time: "Tiempo",
      date: "Fecha",
      day: "Día",
      week: "Semana",
      month: "Mes",
      year: "Año",
      hour: "Hora",
      minute: "Minuto",
      second: "Segundo",
      millisecond: "Milisegundo",
      today: "Hoy",
      yesterday: "Ayer",
      tomorrow: "Mañana",
      now: "Ahora",
      soon: "Pronto",
      later: "Más tarde",
      never: "Nunca",
      always: "Siempre",
      sometimes: "A veces",
      often: "A menudo",
      rarely: "Raramente",
      frequently: "Frecuentemente",
      occasionally: "Ocasionalmente",
      regularly: "Regularmente",
      irregularly: "Irregularmente",
      daily: "Diariamente",
      weekly: "Semanalmente",
      monthly: "Mensualmente",
      yearly: "Anualmente",
      hourly: "Por hora",
      minutely: "Por minuto",
      secondly: "Por segundo"
    },
    features: {
      advancedAI: "IA Avanzada",
      optimalGrowth: "Experiencia Optimizada",
      riskManagement: "Análisis de Volatilidad"
    },
    experience: {
      financialMarkets: "+8 años de experiencia en mercados de criptomonedas",
      riskManagement: "Análisis de volatilidad profesional y transparente",
      portfolioOptimization: "IA avanzada para optimización de herramientas cripto"
    },
    steps: {
      secureRegistration: "Conecta tu cuenta y verifica tu identidad de forma segura",
      setParticipation: "Configura las herramientas según tu perfil de volatilidad",
      realTimeMonitoring: "Monitorea el comportamiento en tiempo real desde tu dashboard"
    },
    roadmapContent: {
      subtitle: "Nuestra visión para transformar el trading automatizado con IA",
      regulatoryNote: {
        title: "Nota Regulatoria",
        content: "Los hitos que involucran licenciamiento y cumplimiento regulatorio están sujetos a aprobaciones de autoridades competentes y pueden experimentar cambios en las fechas."
      }
    },
    depositsContent: {
      title: "Criptoactivos Soportados",
      emailSentTo: "Email enviado a:",
      checkSpam: "Revisa tu bandeja de entrada y la carpeta de spam.",
      priorityAccess: "Acceso prioritario a productos exclusivos de ORA IA",
      depositsInfo: "Información de Criptoactivos",
      readFullText: "Leer texto completo"
    },
    riskLevels: {
      low: "Bajo",
      medium: "Medio",
      high: "Alto",
      veryHigh: "Muy Alto"
    },
    highRiskWarning: "Herramienta de alto riesgo. Puede resultar en pérdidas significativas.",
    walletStatus: {
      connected: "Wallet Conectada",
      connect: "Conectar con Wallet"
    },
    loadingStates: {
      signingIn: "Iniciando sesión...",
      creatingAccount: "Creando cuenta..."
    },
    validationErrors: {
      mustAcceptPolicies: "Debe aceptar ambas políticas para continuar",
      passwordsMismatch: "Las contraseñas no coinciden"
    },
    placeholders: {
      selectCountry: "Seleccionar país"
    }
  },
  en: {
    nav: {
      products: "Tools",
      insights: "Insights",
      roadmap: "Roadmap",
      support: "Support",
      signin: "Sign In",
      createAccount: "Create Account"
    },
    legal: {
      dataPolicy: {
        title: "Data Processing Policy",
        ctaAccept: "Accept data processing policy",
        updated: "Last updated",
        version: "Version"
      },
      volatility: {
        title: "Volatility Risk Disclaimer",
        ctaAccept: "Accept volatility risks"
      },
      fundsOrigin: {
        title: "Funds Origin Declaration", 
        ctaAccept: "Accept funds origin declaration"
      },
      ctaClose: "Close",
      ctaContinueReading: "Continue reading",
      scrollRequired: "You must read the complete document to continue",
      // Placeholder texts - replace with full translations
      dataPolicyText: "EN: [Full Data Processing Policy text would go here - 2000-3500 words]",
      volatilityText: "EN: [Full Volatility Risk Disclaimer text would go here - 1200-2000 words]",
      fundsOriginText: "EN: [Full Funds Origin Declaration text would go here - 800-1200 words]"
    },
    form: {
      checkbox: {
        dataPolicy: "I accept the data processing policy",
        volatility: "I accept the volatility risk disclaimer and acknowledge that I am responsible for my usage decisions",
        fundsOrigin: "I declare that the origin of my funds is lawful and does not come from illegal activities"
      },
      submitDisabledHint: "You must complete the required fields and accept all three policies to continue"
    }
  },
  fr: {
    nav: {
      products: "Outils",
      insights: "Analyses",
      roadmap: "Feuille de route", 
      support: "Support",
      signin: "Se connecter",
      createAccount: "Créer un compte"
    },
    legal: {
      dataPolicy: {
        title: "Politique de Traitement des Données",
        ctaAccept: "Accepter la politique de traitement des données",
        updated: "Dernière mise à jour",
        version: "Version"
      },
      volatility: {
        title: "Avertissement sur les Risques de Volatilité",
        ctaAccept: "Accepter les risques de volatilité"
      },
      fundsOrigin: {
        title: "Déclaration d'Origine des Fonds",
        ctaAccept: "Accepter la déclaration d'origine des fonds"
      },
      ctaClose: "Fermer",
      ctaContinueReading: "Continuer la lecture",
      scrollRequired: "Vous devez lire complètement le document pour continuer",
      // Placeholder texts - replace with full translations
      dataPolicyText: "FR: [Le texte complet de la Politique de Traitement des Données irait ici - 2000-3500 mots]",
      volatilityText: "FR: [Le texte complet de l'Avertissement sur les Risques de Volatilité irait ici - 1200-2000 mots]", 
      fundsOriginText: "FR: [Le texte complet de la Déclaration d'Origine des Fonds irait ici - 800-1200 mots]"
    },
    form: {
      checkbox: {
        dataPolicy: "J'accepte la politique de traitement des données",
        volatility: "J'accepte l'avertissement sur les risques de volatilité et reconnais que je suis responsable de mes décisions d'utilisation",
        fundsOrigin: "Je déclare que l'origine de mes fonds est licite et ne provient pas d'activités illégales"
      },
      submitDisabledHint: "Vous devez compléter les champs requis et accepter les trois politiques pour continuer"
    }
  },
  pt: {
    nav: {
      products: "Ferramentas",
      insights: "Insights",
      roadmap: "Roadmap", 
      support: "Suporte",
      signin: "Entrar",
      createAccount: "Criar Conta"
    },
    legal: {
      dataPolicy: {
        title: "Política de Tratamento de Dados",
        ctaAccept: "Aceitar política de tratamento de dados",
        updated: "Última atualização",
        version: "Versão"
      },
      volatility: {
        title: "Aviso de Riscos de Volatilidade",
        ctaAccept: "Aceitar os riscos de volatilidade"
      },
      fundsOrigin: {
        title: "Declaração de Origem de Fundos",
        ctaAccept: "Aceitar declaração de origem de fundos"
      },
      ctaClose: "Fechar",
      ctaContinueReading: "Continuar lendo",
      scrollRequired: "Você deve ler completamente o documento para continuar",
      // Placeholder texts - replace with full translations
      dataPolicyText: "PT: [O texto completo da Política de Tratamento de Dados ficaria aqui - 2000-3500 palavras]",
      volatilityText: "PT: [O texto completo do Aviso de Riscos de Volatilidade ficaria aqui - 1200-2000 palavras]",
      fundsOriginText: "PT: [O texto completo da Declaração de Origem de Fundos ficaria aqui - 800-1200 palavras]"
    },
    form: {
      checkbox: {
        dataPolicy: "Aceito a política de tratamento de dados",
        volatility: "Aceito o aviso de riscos de volatilidade e reconheço que sou responsável pelas minhas decisões de uso",
        fundsOrigin: "Declaro que a origem dos meus fundos é lícita e não provém de atividades ilegais"
      },
      submitDisabledHint: "Você deve completar os campos obrigatórios e aceitar as três políticas para continuar"
    }
  }
};

export const useTranslation = (language: Language) => {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Spanish if key not found
        value = translations.es;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in fallback
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, language };
};
      title: "The future of trading is AI.",
      subtitle: "ORA IA combines artificial intelligence and global financial experience to generate optimal returns, under any market momentum.",
      tagline: "The future of trading is AI. Boost your trading tools with intelligence."
    },
    cta: {
      join: "Join Whitelisting",
      products: "View tools",
      getStarted: "Get started",
      learnMore: "Learn more"
    },
    products: {
      title: "Our Tools",
      subtitle: "AI-powered automated trading tools to optimize your experience",
      comingSoon: "Coming Soon",
      joinWhitelist: "Join Whitelist",
      monthlyTarget: "Historical reference (past data)",
      multicrypto: {
        title: "Multi-Crypto Spot Tool",
        description: "Automated tool for multiple cryptocurrencies with 2% historical reference (past data)"
      },
      staking: {
        title: "USDT/USDC Staking Tool",
        description: "Conservative profile with 1% historical reference for users seeking stability"
      },
      stocks: {
        title: "Stock Spot Tool",
        description: "Automated tool for stocks with 2% historical reference"
      },
      futures: {
        title: "Crypto Futures Tool",
        description: "High volatility futures tool with 3% historical reference"
      },
      hunter: {
        title: "The Hunter",
        description: "Signal indicator that tracks tokens with high volatility. Thanks to its advanced logic, it identifies patterns that historically have shown significant variations. It's a high volatility tool, with variations that can be very wide.",
        beginner: "Beginner: USD 35/month, signals every 6h (ETH/BSC/SOL) via Telegram",
        expert: "Expert: USD 90/month, signals + automated trading connected to wallet"
      }
    },
    auth: {
      signin: "Sign in",
      signup: "Create account",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      fullName: "Full name",
      phone: "Phone",
      country: "Country",
      language: "Language",
      forgotPassword: "Forgot password?",
      createAccount: "Create account",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      continueWith: "or continue with",
      google: "Google",
      apple: "Apple",
      facebook: "Facebook",
      socialLogin: "Sign in with",
      socialSignup: "Sign up with"
    },
    legal: {
      privacy: "Data Processing Policy",
      disclaimer: "Volatility Risk Disclaimer",
      fundOrigin: "Fund Origin Declaration",
      acceptPrivacy: "I accept the Data Processing Policy",
      acceptDisclaimer: "I accept the Volatility Risk Disclaimer and acknowledge that I am responsible for my usage decisions",
      acceptFundOrigin: "I accept and declare the lawful origin of my crypto assets",
      scrollRequired: "You must read the complete document to continue",
      accept: "Accept terms",
      continueReading: "Continue reading...",
      privacyText: "In accordance with global data protection regulations, including GDPR (Europe) and CCPA (California), ORA IA informs that personal data collected will be processed for: (i) contractual management, (ii) provision of technological services, (iii) marketing communications, (iv) compliance with legal obligations. Data subjects have the right to access, rectify, delete, and object to the processing of their data. ORA IA applies technical and organizational measures to protect data confidentiality and integrity. International transfers of data will only occur under adequate safeguards and contractual guarantees. For data rights requests, contact support@oraglobal.co.",
      disclaimerText: "The use of automated technological tools applied to cryptocurrencies and equities involves high volatility. You may lose part or all of your crypto assets. Any performance references mentioned are historical data, not guarantees. ORA IA shall not be held liable for results arising from user decisions. By proceeding, you acknowledge that you are solely responsible for your choices.",
      fundOriginText: "I hereby declare under oath that the crypto assets used with ORA IA tools originate from lawful activities and are not related to money laundering, terrorism financing, or any similar illicit activities. I authorize ORA IA to conduct compliance checks (KYC/AML) at any time."
    },
    deposits: {
      note: "Supported crypto assets: USDT on POL or TRX; USDC on POL or ETH.",
      strict: "Only USDT (POL/TRX) or USDC (POL/ETH) are supported. Others are not compatible.",
      selectAsset: "Select crypto asset",
      selectNetwork: "Select network",
      warning: "Only USDT (POL/TRX) or USDC (POL/ETH) are supported. Transfers in unsupported assets/networks may result in loss of crypto assets."
    },
    whitelist: {
      success: "CONGRATULATIONS! You're on the ORA IA Whitelisting",
      emailBody: "Welcome to ORA IA. You've taken a step towards the future of automated trading. Our cutting-edge AI and the experience of our founders work to optimize your experience with clear processes and focus on volatility analysis. Soon you will receive priority access, exclusive insights and early opportunities. The trading tech future is already yours!",
      accessPanel: "Access your exclusive panel"
    },
    about: {
      title: "Who We Are",
      description: "Founders' experience and professional risk management"
    },
    howItWorks: {
      title: "How It Works",
      step1: "Secure Registration",
      step2: "Set Participation",
      step3: "Real-time Monitoring"
    },
    roadmap: {
      title: "Roadmap",
      q4_2025: "Q4 2025 - Launch",
      q1_2026: "Q1 2026 - Expansion",
      q2_2026: "Q2 2026 - Growth",
      q3_2026: "Q3 2026 - Advanced AI",
      q4_2026: "Q4 2026 - Institutional"
    },
    footer: {
      rights: "ORA IA — Intelligence Assistant. All rights reserved.",
      labels: {
        contact: "Contact",
        legal: "Legal",
        support: "Support",
        ceo: "CEO",
        cfo: "CFO",
        termsOfService: "Terms of Service"
      },
      techNote: "Website developed with premium technology. All rights reserved."
    },
    common: {
      or: "or",
      loading: "Loading...",
      error: "Error",
      success: "Success"
    },
    features: {
      advancedAI: "Advanced AI",
      optimalGrowth: "Optimal Growth",
      riskManagement: "Risk Management"
    },
    experience: {
      financialMarkets: "+8 years of experience in financial markets",
      riskManagement: "Professional and transparent risk management",
      portfolioOptimization: "Advanced AI for portfolio optimization"
    },
    steps: {
      secureRegistration: "Connect your account and verify your identity securely",
      setParticipation: "Set the participation amount according to your risk profile",
      realTimeMonitoring: "Monitor growth in real-time from your dashboard"
    },
    roadmapContent: {
      subtitle: "Our vision to transform automated trading with AI",
      regulatoryNote: {
        title: "Regulatory Note",
        content: "Milestones involving licensing and regulatory compliance are subject to approvals from competent authorities and may experience changes in dates."
      }
    },
    depositsContent: {
      title: "Accepted Deposits",
      emailSentTo: "Email sent to:",
      checkSpam: "Check your inbox and spam folder.",
      priorityAccess: "Priority access to exclusive ORA IA products",
      depositsInfo: "Deposits Information",
      readFullText: "Read full text"
    },
    riskLevels: {
      low: "Low",
      medium: "Medium",
      high: "High",
      veryHigh: "Very High"
    },
    highRiskWarning: "High-risk tool. May result in significant losses.",
    walletStatus: {
      connected: "Wallet Connected",
      connect: "Connect with Wallet"
    },
    loadingStates: {
      signingIn: "Signing in...",
      creatingAccount: "Creating account..."
    },
    validationErrors: {
      mustAcceptPolicies: "You must accept both policies to continue",
      passwordsMismatch: "Passwords do not match"
    },
    placeholders: {
      selectCountry: "Select country"
    }
  },
  fr: {
    nav: {
      products: "Outils",
      insights: "Insights",
      roadmap: "Roadmap",
      support: "Support",
      signin: "Se connecter",
      createAccount: "Créer un compte"
    },
    hero: {
      title: "L'avenir du trading, c'est l'IA.",
      subtitle: "ORA IA combine l'intelligence artificielle et l'expérience financière mondiale pour générer des retours optimaux, sous n'importe quel momentum de marché.",
      tagline: "L'avenir du trading, c'est l'IA. Faites croître vos outils de trading avec intelligence."
    },
    cta: {
      join: "Accéder à la Whitelisting",
      products: "Voir les outils",
      getStarted: "Commencer",
      learnMore: "En savoir plus"
    },
    products: {
      title: "Nos Outils",
      subtitle: "Solutions de trading automatisé alimentées par l'IA pour maximiser votre croissance",
      comingSoon: "Bientôt disponible",
      joinWhitelist: "Rejoindre la Whitelist",
      monthlyTarget: "Objectif mensuel (estimé)",
      multicrypto: {
        title: "Bot Multi-Crypto Spot",
        description: "Outil automatisé sur plusieurs cryptomonnaies avec objectif de 2% mensuel (sans garantie)"
      },
      staking: {
        title: "Staking USDT/USDC",
        description: "Profil conservateur avec objectif de 1% mensuel pour les utilisateurs cherchant la stabilité"
      },
      stocks: {
        title: "Bot Actions Spot",
        description: "Outil automatisé d'actions avec objectif de 2% mensuel"
      },
      futures: {
        title: "Bot Futures Crypto",
        description: "Outil de futures à haut risque avec objectif de 3% mensuel"
      },
      hunter: {
        title: "Le Chasseur",
        description: "Indicateur de signaux qui traque les tokens avec un fort potentiel de croissance. Grâce à sa logique avancée, il identifie des opportunités qui peuvent générer de gros profits. C'est un outil à haut risque, mais la récompense peut être très importante.",
        beginner: "Débutant: 35 USD/mois, signaux toutes les 6h (ETH/BSC/SOL) via Telegram",
        expert: "Expert: 90 USD/mois, signaux + trading automatique connecté au wallet"
      }
    },
    auth: {
      signin: "Se connecter",
      signup: "Créer un compte",
      email: "Email",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      fullName: "Nom complet",
      phone: "Téléphone",
      country: "Pays",
      language: "Langue",
      forgotPassword: "Mot de passe oublié ?",
      createAccount: "Créer un compte",
      alreadyHaveAccount: "Vous avez déjà un compte ?",
      dontHaveAccount: "Vous n'avez pas de compte ?",
      continueWith: "ou continuez avec",
      google: "Google",
      apple: "Apple",
      facebook: "Facebook",
      socialLogin: "Se connecter avec",
      socialSignup: "S'inscrire avec"
    },
    legal: {
      privacy: "Politique de Traitement des Données",
      disclaimer: "Disclaimer de Risques Financiers",
      fundOrigin: "Déclaration d'Origine des Fonds",
      acceptPrivacy: "J'accepte la Politique de Traitement des Données",
      acceptDisclaimer: "J'accepte le Disclaimer de Risques Financiers et reconnais que je suis responsable de mes décisions de participation",
      acceptFundOrigin: "J'accepte et déclare l'origine licite de mes fonds",
      scrollRequired: "Vous devez lire complètement le document pour continuer",
      accept: "Accepter les termes",
      continueReading: "Continuer la lecture...",
      privacyText: "Conformément au Règlement Général sur la Protection des Données (RGPD) en Europe et à la Loi sur la protection des renseignements personnels au Canada, ORA IA informe que les données personnelles collectées seront traitées aux fins suivantes : (i) gestion contractuelle, (ii) fourniture de services technologiques, (iii) communications commerciales, (iv) respect des obligations légales. Les personnes concernées disposent des droits d'accès, de rectification, de suppression et d'opposition. ORA IA applique des mesures techniques et organisationnelles pour assurer la confidentialité et l'intégrité des données. Les transferts internationaux se feront uniquement avec des garanties adéquates. Pour toute demande, contactez support@oraglobal.co.",
      disclaimerText: "L'utilisation de services technologiques automatisés appliqués aux cryptomonnaies et aux actions comporte un risque élevé. Une perte partielle ou totale des ressources peut survenir. Les objectifs de performance mentionnés sont des estimations et non des garanties. ORA IA ne peut être tenue responsable des résultats découlant des décisions des utilisateurs. En continuant, vous reconnaissez être seul responsable de vos choix.",
      fundOriginText: "Je déclare sous serment que les fonds utilisés dans mes opérations avec ORA IA proviennent d'activités licites et ne sont pas liés au blanchiment d'argent, au financement du terrorisme ou à d'autres activités illicites similaires. J'autorise ORA IA à effectuer des contrôles de conformité (KYC/AML) à tout moment."
    },
    deposits: {
      note: "Dépôts acceptés : USDT sur POL ou TRX ; USDC sur POL ou ETH.",
      strict: "Seuls les dépôts en USDT (POL/TRX) ou USDC (POL/ETH) sont acceptés. Les autres seront refusés.",
      selectAsset: "Sélectionner l'actif",
      selectNetwork: "Sélectionner le réseau",
      warning: "Seuls les dépôts en USDT (POL/TRX) ou USDC (POL/ETH) sont acceptés. Les transferts dans des actifs/réseaux non supportés peuvent entraîner une perte de fonds."
    },
    whitelist: {
      success: "FÉLICITATIONS ! Vous êtes sur la Whitelisting d'ORA IA",
      emailBody: "Bienvenue chez ORA IA. Vous avez fait un pas vers l'avenir du trading automatisé. Notre IA de pointe et l'expérience de nos fondateurs travaillent pour optimiser votre croissance avec des processus clairs et un focus sur la gestion des risques. Vous recevrez bientôt un accès prioritaire, des insights exclusifs et des opportunités anticipées. L'avenir financier est déjà vôtre !",
      accessPanel: "Accédez à votre panneau exclusif"
    },
    about: {
      title: "Qui Nous Sommes",
      description: "Expérience des fondateurs et gestion professionnelle des risques"
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1: "Inscription Sécurisée",
      step2: "Définir Participation",
      step3: "Surveillance Temps Réel"
    },
    roadmap: {
      title: "Roadmap",
      q4_2025: "Q4 2025 - Lancement",
      q1_2026: "Q1 2026 - Expansion",
      q2_2026: "Q2 2026 - Croissance",
      q3_2026: "Q3 2026 - IA Avancée",
      q4_2026: "Q4 2026 - Institutionnel"
    },
    footer: {
      rights: "ORA IA — Assistant Intelligence. Tous droits réservés.",
      labels: {
        contact: "Contact",
        legal: "Légal",
        support: "Support",
        ceo: "CEO",
        cfo: "CFO",
        termsOfService: "Conditions de Service"
      },
      techNote: "Site web développé avec une technologie premium. Tous droits réservés."
    },
    common: {
      or: "ou",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès"
    },
    features: {
      advancedAI: "IA Avancée",
      optimalGrowth: "Croissance Optimale",
      riskManagement: "Gestion des Risques"
    },
    experience: {
      financialMarkets: "+8 ans d'expérience sur les marchés financiers",
      riskManagement: "Gestion des risques professionnelle et transparente",
      portfolioOptimization: "IA avancée pour l'optimisation de portefeuilles"
    },
    steps: {
      secureRegistration: "Connectez votre compte et vérifiez votre identité de manière sécurisée",
      setParticipation: "Définissez le montant de participation selon votre profil de risque",
      realTimeMonitoring: "Surveillez la croissance en temps réel depuis votre tableau de bord"
    },
    roadmapContent: {
      subtitle: "Notre vision pour transformer le trading automatisé avec l'IA",
      regulatoryNote: {
        title: "Note Réglementaire",
        content: "Les jalons impliquant l'octroi de licences et la conformité réglementaire sont soumis aux approbations des autorités compétentes et peuvent subir des changements de dates."
      }
    },
    depositsContent: {
      title: "Dépôts Acceptés",
      emailSentTo: "Email envoyé à:",
      checkSpam: "Vérifiez votre boîte de réception et le dossier spam.",
      priorityAccess: "Accès prioritaire aux produits exclusifs d'ORA IA",
      depositsInfo: "Informations sur les Dépôts",
      readFullText: "Lire le texte complet"
    },
    riskLevels: {
      low: "Faible",
      medium: "Moyen",
      high: "Élevé",
      veryHigh: "Très Élevé"
    },
    highRiskWarning: "Outil à haut risque. Peut entraîner des pertes importantes.",
    walletStatus: {
      connected: "Portefeuille Connecté",
      connect: "Connecter avec Portefeuille"
    },
    loadingStates: {
      signingIn: "Connexion...",
      creatingAccount: "Création du compte..."
    },
    validationErrors: {
      mustAcceptPolicies: "Vous devez accepter les deux politiques pour continuer",
      passwordsMismatch: "Les mots de passe ne correspondent pas"
    },
    placeholders: {
      selectCountry: "Sélectionner le pays"
    }
  },
  pt: {
    nav: {
      products: "Ferramentas",
      insights: "Insights",
      roadmap: "Roadmap",
      support: "Suporte",
      signin: "Entrar",
      createAccount: "Criar conta"
    },
    hero: {
      title: "O futuro do trading é IA.",
      subtitle: "ORA IA combina inteligência artificial e experiência financeira global para gerar retornos ótimos, sob qualquer momentum de mercado.",
      tagline: "O futuro do trading é IA. Potencialize suas ferramentas de trading com inteligência."
    },
    cta: {
      join: "Acessar Whitelisting",
      products: "Ver ferramentas",
      getStarted: "Começar agora",
      learnMore: "Saber mais"
    },
    products: {
      title: "Nossas Ferramentas",
      subtitle: "Soluções de trading automatizado com IA para maximizar seu crescimento",
      comingSoon: "Em breve",
      joinWhitelist: "Junte-se à Whitelist",
      monthlyTarget: "Objetivo mensal (estimado)",
      multicrypto: {
        title: "Ferramenta Multi-Cripto Spot",
        description: "Ferramenta automatizada para múltiplas criptomoedas com referência histórica de 2% mensal (dados passados)"
      },
      staking: {
        title: "Ferramenta Staking USDT/USDC",
        description: "Perfil conservador com referência histórica de 1% mensal para usuários que buscam estabilidade"
      },
      stocks: {
        title: "Ferramenta Ações Spot",
        description: "Ferramenta automatizada para ações com referência histórica de 2% mensal"
      },
      futures: {
        title: "Ferramenta Futuros Cripto",
        description: "Ferramenta de futuros de alta volatilidade com referência histórica de 3% mensal"
      },
      hunter: {
        title: "O Caçador",
        description: "Indicador de sinais que rastreia tokens com alto potencial de crescimento. Graças à sua lógica avançada, identifica oportunidades que podem gerar grandes lucros. É uma ferramenta de alto risco, mas a recompensa pode ser muito grande.",
        beginner: "Iniciante: USD 35/mês, sinais a cada 6h (ETH/BSC/SOL) via Telegram",
        expert: "Especialista: USD 90/mês, sinais + trading automático conectado à carteira"
      }
    },
    auth: {
      signin: "Entrar",
      signup: "Criar conta",
      email: "Email",
      password: "Senha",
      confirmPassword: "Confirmar senha",
      fullName: "Nome completo",
      phone: "Telefone",
      country: "País",
      language: "Idioma",
      forgotPassword: "Esqueceu a senha?",
      createAccount: "Criar conta",
      alreadyHaveAccount: "Já tem uma conta?",
      dontHaveAccount: "Não tem uma conta?",
      continueWith: "ou continue com",
      google: "Google",
      apple: "Apple",
      facebook: "Facebook",
      socialLogin: "Entrar com",
      socialSignup: "Registrar-se com"
    },
    legal: {
      privacy: "Política de Tratamento de Dados",
      disclaimer: "Disclaimer de Riscos Financeiros",
      fundOrigin: "Declaração de Origem de Fundos",
      acceptPrivacy: "Aceito a Política de Tratamento de Dados",
      acceptDisclaimer: "Aceito o Disclaimer de Riscos Financeiros e reconheço que sou responsável pelas minhas decisões de participação",
      acceptFundOrigin: "Aceito e declaro a origem lícita dos meus fundos",
      scrollRequired: "Deve ler completamente o documento para continuar",
      accept: "Aceitar termos",
      continueReading: "Continuar lendo...",
      privacyText: "De acordo com a Lei Geral de Proteção de Dados (LGPD – Brasil) e o Regulamento Europeu (RGPD – Portugal), a ORA IA informa que os dados pessoais coletados serão tratados para: (i) gestão contractual, (ii) fornecimento de serviços tecnológicos, (iii) communications comerciais, (iv) respect des obligations legais. Os titulares tem o direito de acessar, corrigir, excluir e revogar o consentimento a qualquer momento. A ORA IA adota medidas técnicas e administrativas para proteger a confidencialidade e a integridade das informações. Os dados poderão ser transferidos internacionalmente apenas com garantias adequadas de proteção. Para ejercer seus direitos, entre em contato pelo e-mail support@oraglobal.co.",
      disclaimerText: "O uso de serviços tecnológicos automatizados aplicados a criptomoedas e ações envolve alto risco. Pode ocorrer perda parcial ou total dos recursos. Os objetivos de desempeño mencionados são projeções e não garantias. A ORA IA não se responsabiliza pelos resultados decorrentes das decisões do usuário. Ao prosseguir, você reconhece que é o único responsável por suas escolhas.",
      fundOriginText: "Declaro, sob juramento, que os recursos utilizados em minhas operações com a ORA IA têm origem em atividades lícitas e não estão relacionados a lavagem de dinheiro, financiamento ao terrorismo ou outras atividades ilícitas. Autorizo a ORA IA a realizar verificações de conformidade (KYC/AML) a qualquer momento."
    },
    deposits: {
      note: "Depósitos aceitos: USDT em POL ou TRX; USDC em POL ou ETH.",
      strict: "Apenas depósitos em USDT (POL/TRX) ou USDC (POL/ETH) são aceitos. Outros serão rejeitados.",
      selectAsset: "Selecionar ativo",
      selectNetwork: "Selecionar rede",
      warning: "Apenas depósitos em USDT (POL/TRX) ou USDC (POL/ETH) são aceitos. Transferências em ativos/redes não suportados podem resultar em perda de fundos."
    },
    whitelist: {
      success: "PARABÉNS! Você está na Whitelisting da ORA IA",
      emailBody: "Bem-vindo à ORA IA. Você deu um passo em direção ao futuro do trading automatizado. Nossa IA de ponta e a experiência de nossos fundadores trabalham para otimizar seu crescimento com processos claros e foco na gestão de risco. Em breve você receberá acesso prioritário, insights exclusivos e oportunidades antecipadas. O futuro financeiro já é seu!",
      accessPanel: "Acesse seu painel exclusivo"
    },
    about: {
      title: "Quem Somos",
      description: "Experiência dos fundadores e gestão profissional de risco"
    },
    howItWorks: {
      title: "Como Funciona",
      step1: "Registro Seguro",
      step2: "Definir Participação",
      step3: "Monitoramento Tempo Real"
    },
    roadmap: {
      title: "Roadmap",
      q4_2025: "Q4 2025 - Lançamento",
      q1_2026: "Q1 2026 - Expansão",
      q2_2026: "Q2 2026 - Crescimento",
      q3_2026: "Q3 2026 - IA Avançada",
      q4_2026: "Q4 2026 - Institucional"
    },
    footer: {
      rights: "ORA IA — Assistente de Inteligência. Todos os direitos reservados.",
      labels: {
        contact: "Contato",
        legal: "Legal",
        support: "Suporte",
        ceo: "CEO",
        cfo: "CFO",
        termsOfService: "Termos de Serviço"
      },
      techNote: "Site desenvolvido com tecnologia premium. Todos os direitos reservados."
    },
    common: {
      or: "ou",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso"
    },
    features: {
      advancedAI: "IA Avançada",
      optimalGrowth: "Crescimento Ótimo",
      riskManagement: "Gestão de Risco"
    },
    experience: {
      financialMarkets: "+8 anos de experiência em mercados financeiros",
      riskManagement: "Gestão de risco profissional e transparente",
      portfolioOptimization: "IA avançada para otimização de carteiras"
    },
    steps: {
      secureRegistration: "Conecte sua conta e verifique sua identidade com segurança",
      setParticipation: "Defina o valor de participação de acordo com seu perfil de risco",
      realTimeMonitoring: "Monitore o crescimento em tempo real no seu painel"
    },
    roadmapContent: {
      subtitle: "Nossa visão para transformar o trading automatizado com IA",
      regulatoryNote: {
        title: "Nota Regulatória",
        content: "Os marcos que envolvem licenciamento e conformidade regulatória estão sujeitos a aprovações das autoridades competentes e podem sofrer mudanças nas datas."
      }
    },
    depositsContent: {
      title: "Depósitos Aceitos",
      emailSentTo: "Email enviado para:",
      checkSpam: "Verifique sua caixa de entrada e pasta de spam.",
      priorityAccess: "Acesso prioritário a produtos exclusivos da ORA IA",
      depositsInfo: "Informações sobre Depósitos",
      readFullText: "Ler texto completo"
    },
    riskLevels: {
      low: "Baixo",
      medium: "Médio",
      high: "Alto",
      veryHigh: "Muito Alto"
    },
    highRiskWarning: "Ferramenta de alto risco. Pode resultar em perdas significativas.",
    walletStatus: {
      connected: "Carteira Conectada",
      connect: "Conectar com Carteira"
    },
    loadingStates: {
      signingIn: "Entrando...",
      creatingAccount: "Criando conta..."
    },
    validationErrors: {
      mustAcceptPolicies: "Você deve aceitar ambas as políticas para continuar",
      passwordsMismatch: "As senhas não coincidem"
    },
    placeholders: {
      selectCountry: "Selecionar país"
    }
  }
};

export const useTranslation = (language: Language) => {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, language };
};