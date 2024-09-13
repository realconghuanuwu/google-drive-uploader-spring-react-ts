package course.be.controller;

import course.be.entity.UpLoadedFile;
import course.be.service.GoogleService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/drive")
public class GoogleDriveController {

    private final GoogleService googleDriveService;

    public GoogleDriveController(GoogleService googleDriveService) {
        this.googleDriveService = googleDriveService;
    }

    @PostMapping("/upload")
    public UpLoadedFile uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        // Convert MultipartFile to java.io.File
        java.io.File convertedFile = new java.io.File(System.getProperty("java.io.tmpdir") + "/" + file.getOriginalFilename());
        file.transferTo(convertedFile);

        // Call Google Drive service to upload the file
        return googleDriveService.uploadFile(convertedFile, file.getContentType());
    }

    @DeleteMapping("/delete/{fileId}")
    public void deleteFile(@PathVariable String fileId) throws Exception {
        googleDriveService.deleteFile(fileId);
    }
}

