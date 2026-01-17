import cv2
import easyocr
import time

class RealTimeLicensePlateDetector:
    def __init__(self):
        self.reader = easyocr.Reader(['en'])
        self.last_detection_time = 0
        self.detection_interval = 0.5  # Process every 0.5 seconds
        
    def process_frame(self, frame):
        current_time = time.time()
        
        if current_time - self.last_detection_time < self.detection_interval:
            return frame, []
        
        self.last_detection_time = current_time
        
        # Detect license plates
        results = self.reader.readtext(frame)
        detected_plates = []
        
        for (bbox, text, confidence) in results:
            if confidence > 0.6:
                # Clean text
                clean_text = ''.join(c for c in text if c.isalnum()).upper()
                if len(clean_text) >= 4:
                    detected_plates.append(clean_text)
                    
                    # Draw bounding box
                    (top_left, top_right, bottom_right, bottom_left) = bbox
                    top_left = tuple(map(int, top_left))
                    bottom_right = tuple(map(int, bottom_right))
                    
                    cv2.rectangle(frame, top_left, bottom_right, (0, 255, 0), 2)
                    cv2.putText(frame, clean_text, (top_left[0], top_left[1] - 10),
                               cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
        
        return frame, detected_plates

# Real-time detection from webcam
def run_realtime_detection():
    detector = RealTimeLicensePlateDetector()
    cap = cv2.VideoCapture(0)  # Use 0 for webcam, or video file path
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        processed_frame, plates = detector.process_frame(frame)
        # if len(plates) < 4:
        #     print(plates)  # or handle as an error
        # # Add dashes after 2nd and 4th character
        #     print(plates[:2] + '-' + plates[2:4] + '-' + plates[4:])
        #     print(f"Detected plates: {plates}")
        #     break
        if plates:
            print(f"Detected plates: {plates}")
            with open("licenseplate.txt", "a") as f:
                print(f"{plates[0]}", file=f)

        # if plates:
        #    print(f"Detected plates: {plates}")
        #    # Ensure the string is long enough
        
        cv2.imshow('License Plate Detection', processed_frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()

# Uncomment to run real-time detection
run_realtime_detection()
