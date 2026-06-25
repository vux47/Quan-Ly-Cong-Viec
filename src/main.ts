import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';

async function bootstrap(): Promise<void> {
   const app = await NestFactory.create(AppModule);

   app.enableCors();
   app.use(cookieParser());

   // Cấu hình Session
   app.use(
      session({
         secret: 'my-secret-key',
         resave: false,
         saveUninitialized: false,
         cookie: {
            maxAge: 60000,
         },
      }),
   );

   const port = Number(process.env.PORT ?? 3000);
   await app.listen(port);
}
void bootstrap();